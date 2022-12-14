import { eachTemp, templator } from '../../utils';
import {
	searchChatTemp, servicesTemp, chatInfoTemp, chatSettingTemp,
	inputSendMsgTemp, historyMessagesTemp,
} from './modules';
import images1 from "../../../static/icons/chat_services_contacts.png";
import images2 from "../../../static/icons/chat_services_call.png";
import images3 from "../../../static/icons/chat_services_messages.png";
import images4 from "../../../static/icons/chat_services_setting.png";

const searchContainer = document.querySelector('.search__container');
const servicesContainer = document.querySelector('.services__container');
const listChatContainer = document.querySelector('.chat__list');

const listImageServices = [
	{ pathImg: images1, altImg: 'Контакты', linkHref: '#' },
	{ pathImg: images2, altImg: 'Позвонить', linkHref: '#' },
	{ pathImg: images3, altImg: 'Сообщения', linkHref: '#' },
	{ pathImg: images4, altImg: 'Настройки', linkHref: '/profile/profile.html' },
];
const listInfoChats = [
	{ userName: 'Влад', lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! Привет Влад!', timeMessage: '12:32', countMessages: '4' },
	{ userName: 'Ася', lastMessage: 'Займи деньги до завтра', timeMessage: '12:32', countMessages: '4' },
	{ userName: 'Никита', lastMessage: 'Привет!', timeMessage: '12:32', countMessages: '4' },
	{ userName: 'Саня', lastMessage: 'Чд', timeMessage: '12:32', countMessages: '1' },
	{ userName: 'Александр', lastMessage: 'Хочешь зарабатывать дома, от 3000$ в неделю? Переходи по ссылке в закрепе профиля', timeMessage: '12:32', countMessages: '4' },
	{ userName: 'Владислав', lastMessage: 'Поздравляю, мы готовы выслать вам оффер', timeMessage: '12:32', countMessages: '12' },
	{ userName: 'Никита', lastMessage: 'Привет!', timeMessage: '12:32', countMessages: '4' },
	{ userName: 'Саня', lastMessage: 'Чд', timeMessage: '12:32', countMessages: '1' },
	{ userName: 'Александр', lastMessage: 'Хочешь зарабатывать дома, от 3000$ в неделю? Переходи по ссылке в закрепе профиля', timeMessage: '12:32', countMessages: '4' },
	{ userName: 'Владислав', lastMessage: 'Поздравляю, мы готовы выслать вам оффер', timeMessage: '12:32', countMessages: '12' },
];

window.addEventListener('DOMContentLoaded', () => {
	templator(searchChatTemp, null, searchContainer);
	eachTemp(servicesTemp, listImageServices, servicesContainer);
	eachTemp(chatInfoTemp, listInfoChats, listChatContainer);

	const chatItems = document.querySelectorAll('.chat__item');
	const chatMainContainer = document.querySelector('.chat__main');

	chatItems.forEach((chatItem) => {
		chatItem.addEventListener('click', () => {
			chatMainContainer.classList.remove('chat-plug');
			chatMainContainer.classList.add('chat-active');
			const chatPlugText = document.querySelector('.chat-plug__text');

			chatPlugText?.remove();
			if (!document.querySelector('.chat-setting')) {
				templator(chatSettingTemp, null, chatMainContainer);
				templator(historyMessagesTemp, null, chatMainContainer);
				templator(inputSendMsgTemp, null, chatMainContainer);
			}


		});
	});


});

