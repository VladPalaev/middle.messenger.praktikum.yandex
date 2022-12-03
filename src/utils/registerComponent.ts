import Handlebars, { HelperOptions } from "handlebars";
import Component from "./Component";

export default function registerComponent(component: typeof Component) {
	Handlebars.registerHelper(
		component.testName,
		({ hash, data }): HelperOptions => {
			if (!data.root.children) {
				data.root.children = {};
			}
			const { children } = data.root;

			const element = new component(hash);

			children[element._id] = element;

			return `<div data-id="id-${element._id}"></div>`;
		}
	);
}
