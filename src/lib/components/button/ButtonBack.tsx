import React from "mine-react";

interface IButtonBack {
	url: string;
	id?: string;
	onClick?: (e: Event) => void;
}

export const ButtonBack = (props: IButtonBack) => {
	return (
		<button id={props.id} onClick={props.onClick} className="btn btn-back">
			<img src={props.url} alt="" />
		</button>
	);
};
