import React from "mine-react";
import { Route, Router } from "../lib/core/Router";

import { SignInPage } from "./pages/signIn/SignInPage"; //todo потом подлючить через Router
import { ChatPage } from "./pages/chat/ChatPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { ErrorPage } from "./pages/error/ErrorPage";
import { SignUpPage } from "./pages/signUp/SignUpPage";

export const App = () => {
	return (
		<Router>
			<Route path="/" exact={true} component={SignInPage} />
			<Route path="/sign-up" component={SignUpPage} />
			<Route path="/messenger" component={ChatPage} />
			<Route path="/settings" component={ProfilePage} />
			<Route
				path="/error"
				component={() =>
					ErrorPage({
						statusCode: "404",
						messageError: "Не найдена старица",
					})
				}
			/>
		</Router>
	);
};
