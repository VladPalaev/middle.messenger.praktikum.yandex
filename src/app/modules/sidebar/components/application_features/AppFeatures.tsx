import React from "mine-react";
import call from "../../../../../../static/icons/chat_services_call.png";
import contacts from "../../../../../../static/icons/chat_services_contacts.png";
import messages from "../../../../../../static/icons/chat_services_messages.png";
import settings from "../../../../../../static/icons/chat_services_setting.png";

export const AppFeatures = () => {
	return (
		<ul className="services__container fx">
			<li class="services__item">
				<a href="#" class="services__link">
					<img class="services__img" src={contacts} alt="" />
				</a>
			</li>
			<li class="services__item">
				<a href="#" class="services__link">
					<img class="services__img" src={call} alt="" />
				</a>
			</li>
			<li class="services__item">
				<a href="#" class="services__link">
					<img class="services__img" src={messages} alt="" />
				</a>
			</li>
			<li class="services__item">
				<a href="#" class="services__link">
					<img class="services__img" src={settings} alt="" />
				</a>
			</li>
		</ul>
	);
};
