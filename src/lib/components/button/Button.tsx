import React from "mine-react";

interface IButton {
	type: "button" | "submit" | "reset" | "menu";
	className: string;
	label: string;
	id?: string;
	onClick?: (e: Event) => void;
}

export const Button = (props: IButton) => {
	return (
		<button
			type={props.type}
			id={props.id}
			onClick={props.onClick}
			className={props.className}
		>
			{props.label}
		</button>
	);
};
