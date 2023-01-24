import React from "mine-react";
import { FormSignIn } from "./components/FormSignIn";
import { FormSignUp } from "./components/FormSignUp";

export const FormAuth = () => {
	return (
		<div className="auth-container fx-col">
			<FormSignUp />
			<FormSignIn />
		</div>
	);
};
