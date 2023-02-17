import { Api } from "../../../api";

const chatsApi = new Api.chats.Chats();

export const getChats = async () => {
	try {
		return await chatsApi.get();
	} catch (e) {
		console.log(e);
	}
};
