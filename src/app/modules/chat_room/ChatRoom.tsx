import React from "mine-react";
import { ChatSetting } from "./components/chat_setting/ChatSetting";
import { HistoryMessages } from "./components/history_messages/HistoryMessages";
import { InputSendMsg } from "./components/input_send_msg/InputSendMsg";
import avatar from "../../../../static/icons/avatar_default.png";

export const ChatRoom = () => {
	const urlAvatar = avatar; // тут делать запрос на сервер за аватаркой
	const [messages, setMessages] = React.useState([
		{
			text: "привет как дела влад, что делаешь как дела че делаешь меня зовут ася!!!",
			time: "12:23",
			viewed: false,
		},
		{
			text: "привет как дела влад, !!!",
			time: "2:04",
			viewed: false,
		},
	]); // тут делать запрос на сообщения
	const handleUpdateMessages = (newMessage) => {
		setMessages([...messages, newMessage]);
	};
	return (
		<main className="chat__main fx-col">
			<ChatSetting />
			<HistoryMessages messages={messages} avatarUrl={urlAvatar} />
			<InputSendMsg updateMessages={handleUpdateMessages} />
		</main>
	);
};
