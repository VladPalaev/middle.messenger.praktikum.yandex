import React from "mine-react";
import { Avatar } from "../../../../../lib/components";
import { mapMessages } from "../../mappers";
import { IMessage, Message } from "../message/Message";

interface IHistoryMessages {
	avatarUrl: string;
	messages?: IMessage[];
}

export const HistoryMessages = ({ messages, avatarUrl }: IHistoryMessages) => {
	return (
		<div className="history-messages">
			{messages?.map((msg) => (
				<div className="history-messages__container">
					<Avatar url={avatarUrl} />
					<Message
						text={msg.text}
						time={msg.time}
						viewed={msg.viewed}
					/>
				</div>
			))}
		</div>
	);
};
