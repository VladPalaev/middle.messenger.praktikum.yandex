import React from "mine-react";
import { Api } from "../../api";
import { ChatRoom, Sidebar } from "../../modules";
import { StubChat } from "../../modules/chat_room/components/stub_chat/StubChat";
import { mapMessages } from "../../modules/chat_room/mappers";
import {
	createSocket,
	token as chatModel,
} from "../../modules/chat_room/models";

export const ChatPage = () => {
	const [messages, setMessages] = React.useState([]);
	const [isLoadingChat, setIsLoadingChat] = React.useState(false);
	const socket = React.useRef();

	const createSocketConnection = async (idChat: string, idUser: string) => {
		const { token } = await chatModel(idChat);

		socket.current = createSocket({
			chatId: idChat,
			token,
			userId: idUser,
		});

		socket.current.addEventListener("message", (event) => {
			const data = JSON.parse(event.data);

			const newMessages = Array.isArray(data)
				? mapMessages(data, idUser)
				: mapMessages([data], idUser);

			console.log(newMessages, "подготовленный массив");
			console.log(messages);

			setIsLoadingChat(true);
			setMessages(newMessages);
		});
	};

	const selectChatRoom = async (idChat: string) => {
		const { id: idUser } = await new Api.auth.User().get();

		createSocketConnection(idChat, idUser);
	};

	function handlerClick(idChat: string) {
		selectChatRoom(idChat);
	}

	return (
		<div className="chat__container fx">
			<Sidebar selectChat={handlerClick} />
			{isLoadingChat ? (
				<ChatRoom messages={messages} socket={socket} />
			) : (
				<StubChat />
			)}
		</div>
	);
};
