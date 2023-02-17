export type TChatInfo = {
	id: string;
	avatarUrl: string;
	userName: string;
	lastMessage: string;
	timeMessage: string;
	countMessages: string;
};
export type Message = {
	text: string;
	time: string;
	isUserMessage: boolean;
};

//todo подкорекктировать
export type Day = {
	date: string;
	messages: Message[];
};
