import Component from "./Component";

export default function renderDOM(selector: string, component: Component) {
	const root = document.querySelector(selector);

	if (!root) {
		throw new Error("Элемент с таким селектором не найден");
	}

	root.innerHTML = "";

	root.append(component.getContent()!);

	component.dispatchComponentDidMount();
}
