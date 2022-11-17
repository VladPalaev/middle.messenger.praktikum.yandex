import { eachTemp, templator } from '../../utils';
import { buttonTemp, inputTemp } from '../../components';

window.addEventListener('DOMContentLoaded', () => {
	const authFieldList = document.getElementById('auth-field__list');
	const authBtnContainer = document.getElementById('auth-btn__container');

	const dataAuthFields = {
		loginFields: [
			{ style: 'auth-form__field', type: 'text', name: 'email', placeholder: ' ', label: 'Почта', id: 'email' },
			{ style: 'auth-form__field', type: 'text', name: 'login', placeholder: ' ', label: 'Логин', id: 'login' },
			{ style: 'auth-form__field', type: 'text', name: 'first_name', placeholder: ' ', label: 'Имя', id: 'first_name' },
			{ style: 'auth-form__field', type: 'text', name: 'second_name', placeholder: ' ', label: 'Фамилия', id: 'second_name' },
			{ style: 'auth-form__field', type: 'text', name: 'phone', placeholder: ' ', label: 'Телефон', id: 'phone' },
			{ style: 'auth-form__field', type: 'password', name: 'password', placeholder: ' ', label: 'Пароль', id: 'password' },
			{ style: 'auth-form__field', type: 'password', name: 'again_password', placeholder: ' ', label: 'Пароль (ещё раз)', id: 'again_password'}
		]
	};

	templator(buttonTemp, { style: 'btn-login btn', id: 'signup', type: 'submit', label: 'Зарегистрироваться' }, authBtnContainer, true);
	eachTemp(inputTemp, dataAuthFields.loginFields, authFieldList);
})