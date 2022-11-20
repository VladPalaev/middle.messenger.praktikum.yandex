import Handlebars from "handlebars";
// const Handlebars = require('handlebars');
/**
 * Функция для генерация одного hbs компонента в DOM дерево.
 * @param {String} template hbs шаблон
 * @param {Object} context Объект со значеними props
 * @param {Node} parent DOM-елемент в который скомпилируется hbs шаблон
 */

export function templator(template, context, parent, start = false) {
	if (Array.isArray(context)) {
		throw new Error('Аргумент не должен быть массивом. Вызовите для этого eachTemp')
	}
	const fragment = document.createElement('template');

	const compileTemplate = Handlebars.compile(template.trim())(context);
	fragment.innerHTML = compileTemplate;

	if(start) {
		parent.prepend(fragment.content);
		return;
	}

	parent.append(fragment.content);
}
