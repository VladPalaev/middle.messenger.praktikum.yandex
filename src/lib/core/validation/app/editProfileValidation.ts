import { validateDisplayName } from "../rules/profile/rule";
import {
	validateEmail,
	validateFirstName,
	validateLogin,
	validatePhone,
	validateSecondName,
} from "../rules/sign_up/rule";
import { createValidator } from "../services/validation";

const profileFieldRules = {
	email: validateEmail,
	login: validateLogin,
	first_name: validateFirstName,
	second_name: validateSecondName,
	display_name: validateDisplayName,
	phone: validatePhone,
};

const profileFieldErrors = {
	email: "Некорректная почта",
	login: "Логин должен содержать от 3 и до 20 символов (Латинские буквы, цифры, дефис, подчеркивание)",
	first_name: "Имя может состоять минимум из 2 букв, первая буква заглавная",
	second_name:
		"Фамилия может состоять минимум из 2 букв, первая буква заглавная",
	display_name: "Никнейм может содержать только буквы",
	phone: "Только цифры, может начинаться с +",
};

export const validateEditProfileField = createValidator(
	profileFieldRules,
	profileFieldErrors
);
