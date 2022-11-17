import { eachTemp, templator } from '../../utils';
import { searchChatTemp, servicesTemp } from './modules';


const searchContainer = document.querySelector('.search__container');
const servicesContainer = document.querySelector('.services__container');

const listImageServices = [
	{pathImg: '/static/icons/chat_services_contacts.png', altImg: 'Контакты'},
	{pathImg: '/static/icons/chat_services_call.png', altImg: 'Позвонить'},
	{pathImg: '/static/icons/chat_services_messages.png', altImg: 'Сообщения'},
	{pathImg: '/static/icons/chat_services_setting.png', altImg: 'Настройки'},
]

window.addEventListener('DOMContentLoaded', () => {
	templator(searchChatTemp, null, searchContainer);
	eachTemp(servicesTemp, listImageServices, servicesContainer);
})