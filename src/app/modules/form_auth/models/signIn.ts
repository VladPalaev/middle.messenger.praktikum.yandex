import { historyPush } from "../../../../lib/core/Router/Link";
import { Api } from "../../../api";
import { SignInRequestData } from "../../../api/auth/signIn/types";

const signInApi = new Api.auth.SignIn();

export const signIn = async (data: SignInRequestData) => {
	try {
		await signInApi.post(data);

		//todo очистить лоадер
		historyPush("/messenger");
	} catch (e) {
		console.log("ошибка", e);
		//todo вывезти какой нибудь баннер об ошибки и очистить лоадер
	}
};
