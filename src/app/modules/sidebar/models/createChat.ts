import { Api } from "../../../api";

const chatsApi = new Api.chats.Chats();

export const createChat = async (title: string) => {
	try {
		const response = await chatsApi.post({ title });
		//todo написать логику лоадера
	} catch (e) {
		console.log(e);
	}
};
