import React, { ReactDOM } from "mine-react";
import { App } from "../../../app/App";

interface IRouter {
	children?: () => void;
}

export const Router = ({ children }: IRouter) => {
	window.addEventListener("popstate", reload);

	function reload() {
		ReactDOM.render(<App />, document.getElementById("root"));
	}

	return <>{children}</>;
};
