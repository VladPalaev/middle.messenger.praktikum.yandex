import React from "mine-react";

interface IFieldLock {
	stringTemplate: string;
	userValue: string;
}

export const FieldLock = ({ stringTemplate, userValue }: IFieldLock) => {
	return (
		<div className="profile-info__container fx fx-space">
			<span className="profile-info__template">{stringTemplate}</span>
			<span className="profile-info__user-value">{userValue}</span>
		</div>
	);
};
