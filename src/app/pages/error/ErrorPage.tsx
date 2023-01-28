import React from "mine-react";

interface IErrorPage {
	statusCode: string;
	messageError: string;
}

export const ErrorPage = ({ statusCode, messageError }: IErrorPage) => {
	return (
		<div className="error__container fx-col fx-c-c">
			<h1 className="error__tittle">{statusCode}</h1>
			<span className="error__sub-tittle">{messageError}</span>
			<a className="error__link" href="/">
				На главную
			</a>
		</div>
	);
};
