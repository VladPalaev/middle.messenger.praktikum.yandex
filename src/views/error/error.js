import { templator } from '../../utils';
import { errorTemp } from './error.temp';


window.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	const listError = [
		{ status: 500, message: 'Мы уже фиксим' },
		{ status: 404, message: 'Не туда попали' },
	]
	templator(errorTemp, listError[1], root);
})