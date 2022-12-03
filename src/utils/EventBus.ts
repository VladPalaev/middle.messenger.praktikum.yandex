import { Handler } from "../@types";

export default class EventBus<
	E extends string = string,
	H extends { [K in E]: unknown[] } = Record<E, any[]>
> {
	private listeners: { [Key in E]?: Handler<H[E]>[] } = {}; // Todo кажется тут ошибка, нужно H[Key]

	public on(event: E, callback: Handler<H[E]>) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}

		this.listeners[event]!.push(callback);
	}

	public off(event: E, callback: Handler<H[E]>) {
		if (!this.listeners[event]) {
			throw new Error(`Нет такого события ${event}`);
		}

		this.listeners[event] = this.listeners[event]!.filter(
			(listener) => listener !== callback
		);

		if (!this.listeners[event]!.length) {
			delete this.listeners[event];
		}
	}

	public emit(event: E, ...args: H[E]) {
		if (!this.listeners[event]) {
			return;
		}

		this.listeners[event]!.forEach((listener) => listener(...args));
	}
}
