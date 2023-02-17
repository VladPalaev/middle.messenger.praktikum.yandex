import React from "mine-react";

interface IInputInteractiveHint {
	id: string;
	error?: string;
	label: string;
	placeholder: string | " ";
	type: string;
	value: string;
	name: string;
	onChange?: (e: Event) => void;
	onInput?: (e: Event) => void;
}

export const InputInteractiveHint = (props: IInputInteractiveHint) => {
	return (
		<div className="auth-field__container">
			<input
				className="auth-form__field"
				id={props.id}
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				onChange={props.onChange}
				onInput={props.onInput}
				value={props.value}
			/>
			<label className="auth-field__label" for={props.id}>
				{props.label}
			</label>
			{props.error ? (
				<span className="auth-field__error">{props.error}</span>
			) : null}
		</div>
	);
};
