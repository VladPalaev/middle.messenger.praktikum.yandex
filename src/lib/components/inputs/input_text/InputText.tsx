import React from "mine-react";

interface IInputText {
	id?: string;
	className?: string;
	value?: string;
	placeholder?: string;
	onChange?: (e: Event) => void;
	type: string;
	name: string;
}

export const InputText = (props: IInputText) => {
	return (
		<input
			className={props.className}
			id={props.id}
			placeholder={props.placeholder}
			type={props.type}
			name={props.name}
			value={props.value}
			onChange={props.onChange}
		/>
	);
};
