import { avatarTemp, infoTemp, profileSettingTemp } from './components';
import { eachTemp, templator } from '../../utils';

window.addEventListener('DOMContentLoaded', () => {
	const profileAvatarContainer = document.querySelector('.profile-avatar__container');
	const profileInfo = document.querySelector('.profile-info');
	const profileSetting = document.querySelector('.profile-setting');
	const dataProfileInfo = [
		{infoTemplate: 'Почта', userValue: 'vladisla.palaev@yandex.ru'},
		{infoTemplate: 'Логин', userValue: 'Vlad'},
		{infoTemplate: 'Имя', userValue: 'Влад'},
		{infoTemplate: 'Фамилия', userValue: 'Палаев'},
		{infoTemplate: 'Имя в чате', userValue: 'Владислав'},
		{infoTemplate: 'Телефон', userValue: '+7 (909) 967 40 40'},
	];
	const dataProfileSettings = [
		{label: 'Изменить данные'},
		{label: 'Изменить пароль'},
	]
	templator(avatarTemp, null, profileAvatarContainer);
	eachTemp(infoTemp, dataProfileInfo, profileInfo);
	eachTemp(profileSettingTemp, dataProfileSettings, profileSetting, true);
})