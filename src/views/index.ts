import Button from "../component/Button/button";
import registerComponent from "../utils/registerComponent";
import LoginPage from "./Login/login";

document.addEventListener("DOMContentLoaded", () => {
	registerComponent(Button);

	const loginPage = new LoginPage({
		onClick: () => console.log("from pages"),
	});
	const root = document.getElementById("root");

	root?.append(loginPage.getContent());
});
