/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	validateAgainPassword,
	validateEmail,
	validateFirstName,
	validateLogin,
	validatePassword,
	validatePhone,
	validateSecondName,
} from "../rules/sign_up/rule";
import { createValidator } from "../services/validation";

const rules = {
	email: validateEmail,
	login: validateLogin,
	first_name: validateFirstName,
	second_name: validateSecondName,
	phone: validatePhone,
	password: validatePassword,
	again_password: validateAgainPassword,
};

const errors = {
	email: "Некорректная почта",
	login: "Логин должен содержать от 3 и до 20 символов (Латинские буквы, цифры, дефис, подчеркивание)",
	first_name: "Имя может состоять минимум из 2 букв, первая буква заглавная",
	second_name:
		"Фамилия может состоять минимум из 2 букв, первая буква заглавная",
	phone: "Только цифры, может начинаться с +",
	password:
		"Пароль должен содержать от 8 и до 40 символов. Обязательно хотя бы одна заглавная буква и цифра",
	again_password: "Пароли должны совпадать",
};

export const validateSignUpForm = createValidator(rules, errors);
