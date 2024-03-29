//! =========== ПОЧТА ===========
/*
не может начинаться и заканчиваться точкой
не содержит пробелов
не содержит спец символов кроме точек, подчёркиваний и дефисов
может содержать точки до "@"
*/
export const EMAIL_PATTERN =
	/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

//! =========== ЛОГИН ===========

// Ограничение в длине логина
export const MIN_LOGIN_LENGTH = 3;
export const MAX_LOGIN_LENGTH = 20;
// Ограничение в использование -_ более одного раза подряд
export const LOGIN_PATTERN = /^[a-z\d]+([-_]?[a-z0-9]+)+$/i;

//! =========== ИМЯ ===========

export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 40;
export const NAME_PATTERN = /^[A-ZА-Я]+(-?[a-zа-я]+)+$/;

//! =========== ФАМИЛИЯ ===========
// Такие же vars как и у "Имя"
//! =========== ТЕЛЕФОН ===========

export const MIN_PHONE_LENGTH = 10;
export const MAX_PHONE_LENGTH = 15;
export const PHONE_PATTERN = /^(\+\d{1,3}|\d|)(?=\d{10,15}$)/;

//! =========== ПАРОЛЬ ===========
// eslint-disable-next-line no-useless-escape
export const PASSWORD_PATTERN = /^[\w!?@#№$%^&*)(+=.,<>{}\[\]:;'"|\/\\~`_-]+$/i;
export const MIN_PASSWORD_LENGTH = 8;
export const MAX_PASSWORD_LENGTH = 40;
