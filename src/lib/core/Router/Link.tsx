import React, { ReactDOM } from "mine-react";
import { App } from "../../../app/App";

interface ILink {
	to: string;
	className?: string;
	children?: any;
}

type UrlString = string;

export const Link = ({ to, className, children }: ILink) => {
	const handleClick = (e: Event) => {
		historyPush(to);
		e.preventDefault();
	};

	return (
		<a className={className} href={to} onClick={handleClick}>
			{children}
		</a>
	);
};

export function historyPush(path: UrlString) {
	window.history.pushState({}, "", path);
	ReactDOM.render(<App />, document.getElementById("root"));
}

function historReplace(path: UrlString) {
	window.history.replaceState({}, "", path);
}
