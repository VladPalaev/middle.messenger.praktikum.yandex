import React from "mine-react";

export interface IMessage {
	text: string;
	time: string;
	viewed: boolean;
}

export const Message = (props: IMessage) => {
	return (
		<div className="message__container">
			<div className="message__text">{props.text}</div>
			<div className="message__info">
				<time className="message__time">{props.time}</time>
				<div className="message__viewed"></div>
			</div>
		</div>
	);
};
