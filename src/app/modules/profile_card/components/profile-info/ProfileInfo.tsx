import React from "mine-react";
import { IProfileInfo } from "../../../../../types";
import { FieldLock } from "../field/FieldLock";

export const ProfileInfo = (props: IProfileInfo) => {
	return (
		<div className="profile-info">
			<h2 className="profile-nickName">{props.nick_name}</h2>
			<FieldLock stringTemplate="Почта" userValue={props.email} />
			<FieldLock stringTemplate="Логин" userValue={props.login} />
			<FieldLock stringTemplate="Имя" userValue={props.first_name} />
			<FieldLock stringTemplate="Фамилия" userValue={props.second_name} />
			<FieldLock
				stringTemplate="Имя в чате"
				userValue={props.nick_name}
			/>
			<FieldLock stringTemplate="Телефон" userValue={props.phone} />
		</div>
	);
};
