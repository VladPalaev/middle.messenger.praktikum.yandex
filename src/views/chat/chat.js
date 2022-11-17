import { eachTemp, templator } from '../../utils';
import { searchChatTemp, servicesTemp, chatInfoTemp } from './modules';


const searchContainer = document.querySelector('.search__container');
const servicesContainer = document.querySelector('.services__container');
const listChatContainer = document.querySelector('.chat__list');

const listImageServices = [
	{pathImg: '/static/icons/chat_services_contacts.png', altImg: 'Контакты'},
	{pathImg: '/static/icons/chat_services_call.png', altImg: 'Позвонить'},
	{pathImg: '/static/icons/chat_services_messages.png', altImg: 'Сообщения'},
	{pathImg: '/static/icons/chat_services_setting.png', altImg: 'Настройки'},
];

const listInfoChats = [
	{userName: 'Влад', lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! Привет Влад!', timeMessage: '12:32', countMessages: '4'},
	{userName: 'Ася', lastMessage: 'Займи деньги до завтра', timeMessage: '12:32', countMessages: '4'},
	{userName: 'Никита', lastMessage: 'Привет!', timeMessage: '12:32', countMessages: '4'},
	{userName: 'Саня', lastMessage: 'Чд', timeMessage: '12:32', countMessages: '1'},
	{userName: 'Александр', lastMessage: 'Хочешь зарабатывать дома, от 3000$ в неделю? Переходи по ссылке в закрепе профиля', timeMessage: '12:32', countMessages: '4'},
	{userName: 'Владислав', lastMessage: 'Поздравляю, мы готовы выслать вам оффер', timeMessage: '12:32', countMessages: '12'},
	{userName: 'Никита', lastMessage: 'Привет!', timeMessage: '12:32', countMessages: '4'},
	{userName: 'Саня', lastMessage: 'Чд', timeMessage: '12:32', countMessages: '1'},
	{userName: 'Александр', lastMessage: 'Хочешь зарабатывать дома, от 3000$ в неделю? Переходи по ссылке в закрепе профиля', timeMessage: '12:32', countMessages: '4'},
	{userName: 'Владислав', lastMessage: 'Поздравляю, мы готовы выслать вам оффер', timeMessage: '12:32', countMessages: '12'},
];

window.addEventListener('DOMContentLoaded', () => {
	templator(searchChatTemp, null, searchContainer);
	eachTemp(servicesTemp, listImageServices, servicesContainer);
	eachTemp(chatInfoTemp, listInfoChats, listChatContainer);
})