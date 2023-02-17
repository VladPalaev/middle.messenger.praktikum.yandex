import React from "mine-react";
import call from "../../../../../../static/icons/chat_services_call.png";
import contacts from "../../../../../../static/icons/chat_services_contacts.png";
import messages from "../../../../../../static/icons/chat_services_messages.png";
import settings from "../../../../../../static/icons/chat_services_setting.png";
import { Link } from "../../../../../lib/core/Router";

export const AppFeatures = () => {
	return (
		<ul className="services__container fx">
			<li class="services__item">
				<a href="#" class="services__link">
					<img class="services__img" src={contacts} alt="Контакты" />
				</a>
			</li>
			<li class="services__item">
				<a href="#" class="services__link">
					<img class="services__img" src={call} alt="Позвонить" />
				</a>
			</li>
			<li class="services__item">
				<a href="#" class="services__link">
					<img class="services__img" src={messages} alt="Чаты" />
				</a>
			</li>
			<li class="services__item">
				<Link to="/settings" className="services__link">
					<img class="services__img" src={settings} alt="Настройки" />
				</Link>
			</li>
		</ul>
	);
};
