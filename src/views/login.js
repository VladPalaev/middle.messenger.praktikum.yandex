import { inputTemp, buttonTemp  } from '../components';
import { templator, eachTemp } from '../utils';

const authFieldList = document.getElementById('auth-field__list');
const authBtnContainer = document.getElementById('auth-btn__container');



window.addEventListener('DOMContentLoaded', () => {
	const dataAuthFields = {
		loginFields: [
			{ style: 'auth-form__field field-login', type: 'text', name: 'login', placeholder: ' ', label: 'Логин', id: 'login' },
			{ style: 'auth-form__field field-password', type: 'password', name: 'password', placeholder: ' ', label: 'Пароль', id: 'password' },
		]
	};

	templator(buttonTemp, { style: 'btn-login btn', id: 'signin', type: 'submit', label: 'Войти' }, authBtnContainer, true);
	eachTemp(inputTemp, dataAuthFields.loginFields, authFieldList);

	const btnSignIn = document.getElementById('signin');
	const btnRegistry = document.getElementById('btnRegistry');

	btnSignIn.addEventListener('click', (e) => {
		e.preventDefault();

		window.location.href = '/chat/chat.html'
	});

	btnRegistry.addEventListener('click', (e) => {
		e.preventDefault();

		window.location.href = '/registry/registry.html';
	});

})
