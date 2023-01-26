import React from "mine-react";
import { Button, InputInteractiveHint } from "../../../../lib/components";
import { validateSignUpForm } from "../../../../lib/core/validation/app/signUpValidation";

export const FormSignUp = () => {
	const [emailError, setEmailError] = React.useState("");
	const [loginError, setLoginError] = React.useState("");
	const [firstNameError, setFirstNameError] = React.useState("");
	const [secondNameError, setSecondNameError] = React.useState("");
	const [phoneError, setPhoneError] = React.useState("");
	const [passwordError, setPasswordError] = React.useState("");
	const [againPasswordError, setAgainPasswordError] = React.useState("");

	const handleChange = (e: Event) => {
		const field = e.target.name;
		const fieldValue = e.target.value;
		const { valid, errors } = validateSignUpForm(field, fieldValue);

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
			case "phone":
				valid ? setPhoneError("") : setPhoneError(errors[field]);
				break;
			case "password":
				valid ? setPasswordError("") : setPasswordError(errors[field]);
				break;
		}
	};
	return (
		<>
			<h1 className="auth-header">Регистрация</h1>

			<div className="auth-fields">
				<InputInteractiveHint
					label="Почта"
					name="email"
					placeholder=" "
					type="text"
					id="email"
					onChange={handleChange}
					error={emailError}
				/>
				<InputInteractiveHint
					label="Логин"
					name="login"
					placeholder=" "
					type="text"
					id="login"
					onChange={handleChange}
					error={loginError}
				/>
				<InputInteractiveHint
					label="Имя"
					name="first_name"
					placeholder=" "
					type="text"
					id="first_name"
					onChange={handleChange}
					error={firstNameError}
				/>
				<InputInteractiveHint
					label="Фамилия"
					name="second_name"
					placeholder=" "
					type="text"
					id="second_name"
					onChange={handleChange}
					error={secondNameError}
				/>
				<InputInteractiveHint
					label="Телефон"
					name="phone"
					placeholder=" "
					type="text"
					id="phone"
					onChange={handleChange}
					error={phoneError}
				/>
				<InputInteractiveHint
					label="Пароль"
					name="password"
					placeholder=" "
					type="password"
					id="password"
					onChange={handleChange}
					error={passwordError}
				/>
				<InputInteractiveHint
					label="Пароль (eще раз)"
					name="again_password"
					placeholder=" "
					type="password"
					id="again_password"
					onChange={handleChange}
					error={againPasswordError}
				/>
			</div>

			<div className="auth-btn-container fx-col">
				<Button
					type="submit"
					className="btn btn-login"
					label="Зарегистрироваться"
				/>

				<Button
					type="button"
					className="btn btn-registry"
					label="Войти"
				/>
			</div>
		</>
	);
};
