import React from "mine-react";

interface IChatInfo {
	avatarUrl: string;
	userName: string;
	lastMessage: string;
	timeMessage: string;
	countMessages: string;
}

export const ChatInfo = ({
	avatarUrl,
	userName,
	lastMessage,
	countMessages,
	timeMessage,
}: IChatInfo) => {
	return (
		<li className="chat-info chat__item">
			<div className="chat-info__avatar">
				<img src={avatarUrl} alt="Аватар пользователя" />
			</div>
			<div className="chat-info__description">
				<div className="chat-info__user-name">{userName}</div>
				<div className="chat-info__last-message">{lastMessage}</div>
			</div>
			<div className="chat-info__time-count fx-col fx-space">
				<time
					className="chat-info__time_message"
					datetime="2014-09-28 19:00"
				>
					{timeMessage}
				</time>
				<span className="chat-info__count-message fx fx-c-c">
					{countMessages}
				</span>
			</div>
		</li>
	);
};
