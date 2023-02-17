import { historyPush } from "../../../../lib/core/Router/Link";
import { Api } from "../../../api";

const logOutInstance = new Api.auth.LogOut();

export const logOut = async () => {
	try {
		await logOutInstance.post();

		historyPush("/");
	} catch (e) {
		console.log(e);
	}
};
