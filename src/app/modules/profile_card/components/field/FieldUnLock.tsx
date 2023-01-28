import React from "mine-react";
import { InputText } from "../../../../../lib/components";

interface IFieldUnLock {
	type: string;
	stringTemplate: string;
	inputName: string;
	placeholder: string;
	onChange: (e: Event) => void;
	error: string;
}

export const FieldUnLock = ({
	stringTemplate,
	inputName,
	type,
	placeholder,
	onChange,
	error,
}: IFieldUnLock) => {
	return (
		<div className="profile-info__container fx fx-space">
			<span className="profile-info__template">{stringTemplate}</span>
			<InputText
				onChange={onChange}
				name={inputName}
				className={`profile-info__user-value profile-info__user-value-edit ${
					error ? "field--error" : ""
				}`}
				type={type}
				placeholder={placeholder}
			/>
		</div>
	);
};
