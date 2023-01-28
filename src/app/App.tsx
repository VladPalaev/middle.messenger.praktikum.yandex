import React from "mine-react";
import { AuthPage } from "./pages/auth/AuthPage"; //todo потом подлючить через Router
import { ChatPage } from "./pages/chat/ChatPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { ErrorPage } from "./pages/error/ErrorPage";

export const App = () => {
	return (
		<>
			<AuthPage />
			<ChatPage />
			<ProfilePage />
			<ErrorPage
				statusCode="500"
				messageError="Ошибка на стороне сервера"
			/>
			<ErrorPage
				statusCode="404"
				messageError="Проверьте подключение к интернету"
			/>
		</>
	);
};
