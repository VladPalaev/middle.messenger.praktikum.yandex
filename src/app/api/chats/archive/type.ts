export type User = {
	id: number;
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	phone: string;
	avatar: string;
};

type LastMessage = {
	user: User;
	time: string;
	content: string;
};

export type ArchiveChatsResponse = {
	id: number;
	title: string;
	avatar: string;
	unread_count: number;
	last_message: LastMessage;
};

export type ArchiveChatReqestData = {
	chatId: number;
};
