/* eslint-disable no-use-before-define */
import Handlebars from "handlebars";
import { v4 } from "uuid";
import { Values } from "../@types";
import EventBus from "./EventBus";

type Events = Values<typeof Component.EVENTS>;
type Children = Record<string, Component>;

export default abstract class Component<P extends Record<string, any> = any> {
	static EVENTS = {
		INIT: "init",
		FLOW_CDM: "flow:component-did-mount",
		FLOW_CDU: "flow:component-did-update",
		FLOW_RENDER: "flow:render",
	} as const;

	protected _element!: HTMLElement;
	protected props: P;
	protected children: Children;

	public eventBus: () => EventBus<Events>;

	private _id: string;

	constructor(allProps?: P) {
		const { children, props } = this.getPropsAndChildren(
			allProps ?? ({} as P)
		);

		const eventBus = new EventBus<Events>();
		this._registerEvents(eventBus);

		this._id = v4();
		this.eventBus = () => eventBus;

		this.props = this._makePropsProxy(props ?? ({} as P)) as P;
		this.children = children;

		this.eventBus().emit("init");
	}

	private _registerEvents(eventBus: EventBus<Events>) {
		eventBus.on("init", this.init.bind(this));
		eventBus.on(
			"flow:component-did-update",
			this._componentDidUpdate.bind(this)
		);
		eventBus.on(
			"flow:component-did-mount",
			this._componentDidMount.bind(this)
		);
		eventBus.on("flow:render", this._render.bind(this));
	}

	public init() {
		this.eventBus().emit("flow:render");
	}

	private _componentDidUpdate(oldProps: P, nextProps: P) {
		const response = this.componentDidUpdate(oldProps, nextProps);

		if (!response) {
			return;
		}

		this.eventBus().emit("flow:render");
	}

	protected componentDidUpdate(oldProps: P, nextProps: P): boolean {
		return true; // todo сделать isDeepEqual
	}

	private _componentDidMount() {
		this.componentDidMount();
	}

	protected componentDidMount() {
		// todo
	}

	private _render() {
		const templateString = this.render();

		const fragment = this._compile(templateString, { ...this.props });

		const newElement = fragment.firstElementChild as HTMLElement;

		this._element?.replaceWith(newElement);

		this._element = newElement;
		this._addEvents();
	}

	private _compile(templateString: string, context: any) {
		const fragment = document.createElement("template");

		const template = Handlebars.compile(templateString);
		fragment.innerHTML = template({
			...context,
			children: this.children,
		});

		Object.entries(this.children).forEach(([key, component]) => {
			const stub = fragment.content.querySelector(
				`[data-id="id-${component._id}"]`
			);

			if (!stub) {
				return;
			}

			stub.replaceWith(component.getContent());
		});

		return fragment.content;
	}

	abstract render(): string {}

	private _addEvents() {
		const { events } = this.props;

		if (!events) {
			return;
		}

		Object.entries(events).forEach(([event, handler]) => {
			this._element.addEventListener(event, handler);
		});
	}

	public getContent() {
		if (
			this._element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE
		) {
			setTimeout(() => {
				if (
					this._element?.parentNode?.nodeType !==
					Node.DOCUMENT_FRAGMENT_NODE
				) {
					this.eventBus().emit("flow:component-did-mount");
				}
			}, 100);
		}

		return this._element;
	}

	private _makePropsProxy(props: P) {
		const self = this;

		return new Proxy(props as unknown as object, {
			get(target: Record<string, unknown>, prop: string) {
				const value = target[prop];
				if (typeof value === "function") {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-return
					return value.bind(target);
				}
				return value;
			},
			set(target: Record<string, unknown>, prop: string, value: unknown) {
				const oldProps = { ...target };
				target[prop] = value;

				self.eventBus().emit(
					"flow:component-did-update",
					oldProps,
					target
				);

				return true;
			},
			deleteProperty() {
				throw new Error("Нет доступа");
			},
		});
	}

	public setProps = (nextProps: P) => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props as unknown as object, nextProps);
	};

	private getPropsAndChildren(allProps: P) {
		const props = {} as P;
		const children: Children = {};

		Object.entries(allProps as object).forEach(([key, value]) => {
			if (value instanceof Component) {
				children[key] = value;
				return;
			}

			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			props[key] = value;
		});

		return {
			props,
			children,
		};
	}

	public show() {
		this.getContent().style.display = "block";
	}

	public hide() {
		this.getContent().style.display = "none";
	}
}
