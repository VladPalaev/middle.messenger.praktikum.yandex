import Handlebars from "handlebars";
// const Handlebars = require('handlebars');


/**
 * Функция для генерации несколько однотипных hbs шаблонов для последующей вставки в DOM-дерево
 * @param {String} template hbs шаблон
 * @param {Array<object>} context Массив объектов props
 * @param {Node} parent DOM-елемент в который скомпилируется hbs шаблон
*/

export function eachTemp(template, context, parent, start = false) {
	if (!Array.isArray(context)) {
		throw new Error('Аргумент context ожидается массивом. Для создание единичного шаблона используйте templator');
	}
	const props = { context: context };

	const fragment = document.createElement('template');
	const eachTemplate = `
	{{#each context}}
		${template}
	{{/each}}`.trim();

	const compileTemplate = Handlebars.compile(eachTemplate)(props);
	fragment.innerHTML = compileTemplate;
	if( start) {
		parent.prepend(fragment.content);
	}

	parent.append(fragment.content);
}
