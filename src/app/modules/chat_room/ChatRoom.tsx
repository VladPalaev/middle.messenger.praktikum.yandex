import React from "mine-react";
import { ChatSetting } from "./components/chat_setting/ChatSetting";
import { HistoryMessages } from "./components/history_messages/HistoryMessages";
import { InputSendMsg } from "./components/input_send_msg/InputSendMsg";
import avatar from "../../../../static/icons/avatar_default.png";

export const ChatRoom = (props) => {
	const urlAvatar = avatar; // тут делать запрос на сервер за аватаркой

	function sendMessageHandler(message) {
		if (message && props.socket) {
			props.socket.current.send(
				JSON.stringify({
					type: "message",
					content: message,
				})
			);
		}
	}

	return (
		<main className="chat__main fx-col">
			<ChatSetting />
			<HistoryMessages messages={props.messages} avatarUrl={urlAvatar} />
			<InputSendMsg updateMessages={sendMessageHandler} />
		</main>
	);
};
