import React from "mine-react";
import { Button, InputInteractiveHint } from "../../../../lib/components";
import { Link } from "../../../../lib/core/Router";
import { signIn } from "../models/signIn";

export const FormSignIn = () => {
	const [login, setLogin] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleUpdateValue = (setterField) => {
		return (e: Event) => {
			setterField(e.target.value);
		};
	};

	const handleLoginSubmit = async (e: Event) => {
		e.preventDefault();

		const data = new FormData(e.target);
		const [login, password] = data.values();
		const response = await signIn({ login, password }); //todo можно удалить response
	};

	return (
		<form className="auth-container fx-col" onSubmit={handleLoginSubmit}>
			<h1 className="auth-header">Вход</h1>

			<div className="auth-fields">
				<InputInteractiveHint
					label="Логин"
					name="login"
					placeholder=" "
					type="text"
					id="login"
					onInput={handleUpdateValue(setLogin)}
					value={login}
				/>
				<InputInteractiveHint
					label="Пароль"
					name="password"
					placeholder=" "
					type="password"
					id="password"
					onInput={handleUpdateValue(setPassword)}
					value={password}
				/>
			</div>

			<div className="auth-btn-container fx-col">
				<Button
					type="submit"
					className="btn btn-login"
					label="Авторизоваться"
				/>
				<Link to="/sign-up" className="btn btn-registry">
					Нет аккаунта?
				</Link>
			</div>
		</form>
	);
};
