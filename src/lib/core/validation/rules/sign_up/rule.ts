import { all } from "../../services/validation";
import { contains, inRange, notEmpty } from "../../utils";
import {
	EMAIL_PATTERN,
	LOGIN_PATTERN,
	MAX_LOGIN_LENGTH,
	MAX_NAME_LENGTH,
	MAX_PASSWORD_LENGTH,
	MAX_PHONE_LENGTH,
	MIN_LOGIN_LENGTH,
	MIN_NAME_LENGTH,
	MIN_PASSWORD_LENGTH,
	MIN_PHONE_LENGTH,
	NAME_PATTERN,
	PASSWORD_PATTERN,
	PHONE_PATTERN,
} from "./var";

// Почта
const isValidEmail = (email) => contains(email, EMAIL_PATTERN);

// Логин
const isValidLoginLength = (login) =>
	inRange(login.length, MIN_LOGIN_LENGTH, MAX_LOGIN_LENGTH);

const hasAtLeastOneLetter = (login) => contains(login, /[a-z]/i);
const isValidLogin = (login) => contains(login, LOGIN_PATTERN);

// Имя
const isValidFirstNameLength = (first_name) =>
	inRange(first_name.length, MIN_NAME_LENGTH, MAX_NAME_LENGTH);

const isValidFirstName = (first_name) => contains(first_name, NAME_PATTERN);

// Фамилия
const isValidSecondNameLength = (second_name) =>
	inRange(second_name.length, MIN_NAME_LENGTH, MAX_NAME_LENGTH);

const isValidSecondName = (second_name) => contains(second_name, NAME_PATTERN);

// Телефон
const isValidPhoneLength = (phone) =>
	inRange(phone.length, MIN_PHONE_LENGTH, MAX_PHONE_LENGTH);

const isValidPhone = (phone) => contains(phone, PHONE_PATTERN);

// Пароль
const isValidPasswordLength = (password) =>
	inRange(password.length, MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH);

const hasOneCapitalLetter = (password) => contains(password, /[A-Z]/);
const hasOneDigit = (password) => contains(password, /\d/);
const isValidPassword = (password) => contains(password, PASSWORD_PATTERN);

// Again пароль
const checkEnteredPassword = (password, again_password) => {
	return password == again_password;
};
// группируем наши функции для проверки логина, чтобы дальше в програме перебрать все правила
const emailRules = [notEmpty, isValidEmail];
const loginRules = [
	notEmpty,
	isValidLoginLength,
	hasAtLeastOneLetter,
	isValidLogin,
];
const firstNameRules = [notEmpty, isValidFirstNameLength, isValidFirstName];
const secondNameRules = [notEmpty, isValidSecondNameLength, isValidSecondName];
const phoneRules = [notEmpty, isValidPhoneLength, isValidPhone];
const passwordRules = [
	notEmpty,
	isValidPasswordLength,
	hasOneCapitalLetter,
	hasOneDigit,
	isValidPassword,
];
const againPasswordRules = [checkEnteredPassword];
// благодаря каррированию функции all, мы замыкаем наши правила и возвращаем функцию
// которая принимает какую-ту data и дальше наши функции деструктуризируют этот объект забирая нужное
export const validateEmail = all(emailRules);
export const validateLogin = all(loginRules);
export const validateFirstName = all(firstNameRules);
export const validateSecondName = all(secondNameRules);
export const validatePhone = all(phoneRules);
export const validatePassword = all(passwordRules);
export const validateAgainPassword = all(againPasswordRules);
