import React from "mine-react";
import { Button, InputInteractiveHint } from "../../../../lib/components";

export const FormSignIn = () => {
	return (
		<>
			<h1 className="auth-header">Вход</h1>

			<div className="auth-fields">
				<InputInteractiveHint
					label="Логин"
					name="login"
					placeholder=" "
					type="text"
					id="login"
				/>
				<InputInteractiveHint
					label="Пароль"
					name="password"
					placeholder=" "
					type="password"
					id="password"
				/>
			</div>

			<div className="auth-btn-container fx-col">
				<Button className="btn btn-login" label="Авторизоваться" />
				<Button className="btn btn-registry" label="Нет аккаунта?" />
			</div>
		</>
	);
};
