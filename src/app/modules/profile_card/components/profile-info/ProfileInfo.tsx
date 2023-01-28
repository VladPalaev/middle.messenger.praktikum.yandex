import React from "mine-react";
import { Button } from "../../../../../lib/components";
import { validateEditProfileField } from "../../../../../lib/core/validation/app/editProfileValidation";
import { IProfileInfo } from "../../../../../types";
import { FieldLock } from "../field/FieldLock";
import { FieldUnLock } from "../field/FieldUnLock";

export const ProfileInfo = (props: IProfileInfo) => {
	const [emailError, setEmailError] = React.useState("");
	const [loginError, setLoginError] = React.useState("");
	const [firstNameError, setFirstNameError] = React.useState("");
	const [secondNameError, setSecondNameError] = React.useState("");
	const [displayNameError, setDisplayNameError] = React.useState("");
	const [phoneError, setPhoneError] = React.useState("");

	const handleChange = (e: Event) => {
		const field = e.target.name;
		const fieldValue = e.target.value;
		const { valid, errors } = validateEditProfileField(field, fieldValue);

		switch (field) {
			case "email":
				valid ? setEmailError("") : setEmailError(errors[field]);
				break;
			case "login":
				valid ? setLoginError("") : setLoginError(errors[field]);
				break;
			case "first_name":
				valid
					? setFirstNameError("")
					: setFirstNameError(errors[field]);
				break;
			case "second_name":
				valid
					? setSecondNameError("")
					: setSecondNameError(errors[field]);
				break;
			case "display_name":
				valid
					? setDisplayNameError("")
					: setDisplayNameError(errors[field]);
				break;
			case "phone":
				valid ? setPhoneError("") : setPhoneError(errors[field]);
				break;
		}
	};

	if (props.flag) {
		return (
			<form className="profile-info">
				<h2 className="profile-nickName">{props.nick_name}</h2>
				<FieldUnLock
					error={emailError}
					type="text"
					onChange={handleChange}
					stringTemplate="Почта"
					inputName="email"
					placeholder={props.email}
				/>
				<FieldUnLock
					error={loginError}
					type="text"
					onChange={handleChange}
					stringTemplate="Логин"
					inputName="login"
					placeholder={props.login}
				/>
				<FieldUnLock
					error={firstNameError}
					type="text"
					onChange={handleChange}
					stringTemplate="Имя"
					inputName="first_name"
					placeholder={props.first_name}
				/>
				<FieldUnLock
					error={secondNameError}
					type="text"
					onChange={handleChange}
					stringTemplate="Фамилия"
					inputName="second_name"
					placeholder={props.second_name}
				/>
				<FieldUnLock
					error={displayNameError}
					type="text"
					onChange={handleChange}
					stringTemplate="Имя в чате"
					inputName="display_name"
					placeholder={props.nick_name}
				/>
				<FieldUnLock
					error={phoneError}
					type="text"
					onChange={handleChange}
					stringTemplate="Телефон"
					inputName="phone"
					placeholder={props.phone}
				/>
				<Button
					className="btn btn-save-profile"
					type="submit"
					label="Сохранить"
				/>
			</form>
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
