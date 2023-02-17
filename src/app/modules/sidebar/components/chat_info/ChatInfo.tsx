import React from "mine-react";
import { TChatInfo } from "../../types";

export const ChatInfo = ({
	onClick,
	avatarUrl,
	userName,
	lastMessage,
	countMessages,
	timeMessage,
}: TChatInfo) => {
	return (
		<li className="chat-info chat__item" onClick={onClick}>
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
				{Number(countMessages) ? (
					<span className="chat-info__count-message fx fx-c-c">
						{countMessages}
					</span>
				) : null}
			</div>
		</li>
	);
};
