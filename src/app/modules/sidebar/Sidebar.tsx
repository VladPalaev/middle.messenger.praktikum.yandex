import React from "mine-react";
import { AppFeatures } from "./components/application_features/AppFeatures";
import { ChatInfo } from "./components/chat_info/ChatInfo";
import { SearchChat } from "./components/search_chat/Search_chat";
import defaultAvatar from "../../../../static/icons/avatar_default.png";
import { mapChats } from "./mappers";
import { getChats } from "./models";
import { AddChat } from "./components/add_chat/addChat";

type TSidebar = {
	selectChat: (idChat: string) => void;
};

export const Sidebar = ({ selectChat }: TSidebar) => {
	const fetchChats = async () => {
		try {
			const chats = await getChats();

			return mapChats(chats);
		} catch (e) {
			//todo Обработать ошибку
			console.log(e);
		}
	};

	React.useEffect(async () => {
		const chats = await fetchChats();
		console.log(chats);
		setChats(chats);
	});

	const [chats, setChats] = React.useState([]);

	return (
		<aside className="chat__sidebar">
			<AppFeatures />
			<SearchChat />
			<AddChat />
			<ul className="chat__list">
				{chats.map((chat) => {
					return (
						<ChatInfo
							id={chat.id}
							countMessages={chat.countMessages}
							avatarUrl={chat.avatarUrl || defaultAvatar}
							lastMessage={chat.lastMessage}
							timeMessage={chat.timeMessage}
							userName={chat.userName}
							onClick={() => selectChat(chat.id)}
						/>
					);
				})}
			</ul>
		</aside>
	);
};
