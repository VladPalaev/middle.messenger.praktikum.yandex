import React from "mine-react";
import { ChatRoom, Sidebar } from "../../modules";

export const ChatPage = () => {
	return (
		<div className="chat__container fx">
			<Sidebar />
			<ChatRoom />
		</div>
	);
};
