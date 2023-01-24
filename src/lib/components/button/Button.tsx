import React from "mine-react";

interface IButton {
	className: string;
	label: string;
	id?: string;
	onClick?: (e: Event) => void;
}

export const Button = (props: IButton) => {
	return (
		<button
			id={props.id}
			onClick={props.onClick}
			className={props.className}
		>
			{props.label}
		</button>
	);
};
