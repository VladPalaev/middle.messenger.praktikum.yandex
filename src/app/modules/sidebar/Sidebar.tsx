import React from "mine-react";
import { AppFeatures } from "./components/application_features/AppFeatures";
import { ChatInfo } from "./components/chat_info/ChatInfo";
import { SearchChat } from "./components/search_chat/Search_chat";
import defaultAvatar from "../../../../static/icons/avatar_default.png";

export const Sidebar = () => {
	return (
		<aside className="chat__sidebar">
			<AppFeatures />
			<SearchChat />
			<ul className="chat__list">
				<ChatInfo
					countMessages="4"
					avatarUrl={defaultAvatar}
					lastMessage="Hello "
					timeMessage="3:32"
					userName="Vlad"
				/>
			</ul>
		</aside>
	);
};
