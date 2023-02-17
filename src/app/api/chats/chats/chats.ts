import { HTTP } from "../../../../lib/core/HttpTransport";
import { GetChatsResponse } from "../chat/type";
import { ChatDeleteData, ChatPostData } from "./type";

const chatsInstance = new HTTP("/chats");

export class Chats {
	public get() {
		return chatsInstance.get<GetChatsResponse[]>("");
	}

	public post(data: ChatPostData) {
		return chatsInstance.post<ChatPostData, unknown>("", { data });
	}

	public delete(data: ChatDeleteData) {
		return chatsInstance.delete<ChatDeleteData, unknown>("", { data });
	}

	public token(id: string) {
		return chatsInstance.post<unknown, { token: string }>(`/token/${id}`);
	}
}
