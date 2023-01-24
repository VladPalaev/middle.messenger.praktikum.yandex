import React from "mine-react";
import { AuthPage } from "./pages/auth/AuthPage"; //todo потом подлючить через Router
import { ChatPage } from "./pages/chat/ChatPage";
import { ProfilePage } from "./pages/profile/ProfilePage";

export const App = () => {
	return (
		<>
			<AuthPage />
			<ChatPage />
			<ProfilePage />
		</>
	);
};
