import { historyPush } from "../../../../lib/core/Router/Link";
import { Api } from "../../../api";
import { SingUpRequestData } from "../../../api/auth/signUp/types";

const signUpApi = new Api.auth.SignUp();

export const signUp = async (formData: SingUpRequestData) => {
	try {
		debugger;
		const data = {};
		[...formData].forEach(([key, value]) => (data[key] = value));
		const response = await signUpApi.post(data);
		//todo поставить лоадер и закинуть в store данные id user
		console.log(response);
		historyPush("/messenger");
	} catch (e) {
		console.log(e);
	}
};
