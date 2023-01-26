import React from "mine-react";
import { Button } from "../../../../../lib/components";
import { IProfileInfo } from "../../../../../types";
import { FieldLock } from "../field/FieldLock";
import { FieldUnLock } from "../field/FieldUnLock";

export const ProfileInfo = (props: IProfileInfo) => {
	console.log(props.flag);
	if (props.flag) {
		return (
			<div className="profile-info">
				<h2 className="profile-nickName">{props.nick_name}</h2>
				<FieldUnLock
					stringTemplate="Почта"
					inputName="email"
					placeholder={props.email}
				/>
				<FieldUnLock
					stringTemplate="Логин"
					inputName="login"
					placeholder={props.login}
				/>
				<FieldUnLock
					stringTemplate="Имя"
					inputName="first_name"
					placeholder={props.first_name}
				/>
				<FieldUnLock
					stringTemplate="Фамилия"
					inputName="second_name"
					placeholder={props.second_name}
				/>
				<FieldUnLock
					stringTemplate="Имя в чате"
					inputName="nick_name"
					placeholder={props.nick_name}
				/>
				<FieldUnLock
					stringTemplate="Телефон"
					inputName="phone"
					placeholder={props.phone}
				/>
				<Button
					className="btn btn-save-profile"
					type="submit"
					label="Сохранить"
				/>
			</div>
		);
	}
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
