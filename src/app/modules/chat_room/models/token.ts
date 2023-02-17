import { Api } from "../../../api";

const chatsApi = new Api.chats.Chats();

export const token = async (id: string) => chatsApi.token(id);
