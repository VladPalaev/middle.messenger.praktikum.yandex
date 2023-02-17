import { HTTP } from "../../../../lib/core/HttpTransport";
import {
	ChatUser,
	GetChatFilesResponse,
	GetChatsResponse,
	GetNewMessagesResponse,
	UpdateUsersRequest,
} from "./type";

const chatInstance = new HTTP("/chats");

export class Chat {
	public getChatFiles(id: string) {
		return chatInstance.get<GetChatFilesResponse>(`/${id}/files`);
	}

	public getChatCommon(id: string) {
		return chatInstance.get<GetChatsResponse>(`/${id}/common`);
	}

	public getChatUser(id: string) {
		return chatInstance.get<ChatUser[]>(`/${id}/users`);
	}

	public getNewMessages(id: string) {
		return chatInstance.get<GetNewMessagesResponse>(`/new/${id}`);
	}

	public addUserToChat(data: UpdateUsersRequest) {
		return chatInstance.put("/users", { data });
	}

	public removeUserFromChat(data: UpdateUsersRequest) {
		return chatInstance.delete("/users", { data });
	}
	//todo добавить обновление аватарки чата
}
