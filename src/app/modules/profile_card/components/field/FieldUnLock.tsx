import React from "mine-react";
import { InputText } from "../../../../../lib/components";

interface IFieldUnLock {
	type: string;
	stringTemplate: string;
	inputName: string;
	placeholder: string;
}

export const FieldUnLock = ({
	stringTemplate,
	inputName,
	type,
	placeholder,
}: IFieldUnLock) => {
	return (
		<div className="profile-info__container fx fx-space">
			<span className="profile-info__template">{stringTemplate}</span>
			<InputText
				name={inputName}
				className="profile-info__user-value profile-info__user-value-edit"
				type={type}
				placeholder={placeholder}
			/>
		</div>
	);
};
