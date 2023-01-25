import React from "mine-react";

interface IButtonBack {
	type: "button" | "submit" | "reset" | "menu";
	url: string;
	id?: string;
	onClick?: (e: Event) => void;
}

export const ButtonBack = (props: IButtonBack) => {
	return (
		<button
			type={props.type}
			id={props.id}
			onClick={props.onClick}
			className="btn btn-back"
		>
			<img src={props.url} alt="" />
		</button>
	);
};
