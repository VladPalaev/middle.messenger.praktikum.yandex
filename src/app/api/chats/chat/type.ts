import { User } from "../archive/type";

type ChatFileType = "type" | "file ";
type Role = "admin" | "regular";

type ChatFile = {
	id: number;
	user_id: number;
	path: string;
	filename: string;
	content_type: string;
	content_size: number;
	upload_date: string;
};

export type GetChatFilesResponse = {
	id: number;
	user_id: number;
	chat_id: number;
	time: string;
	type: ChatFileType;
	content: string;
	file?: ChatFile;
};

export type ChatUser = User & { role: Role };

export type GetNewMessagesResponse = {
	unread_count: number;
};

export type UpdateUsersRequest = {
	users: number[];
	chatId: number;
};

export type GetChatsResponse = {
	id: number;
	title: string;
	avatar: string | null;
	unread_count: number;
	last_message: ChatMessage | null;
};

export type ChatMessage = {
	user: User;
	time: string;
	content: string;
};
