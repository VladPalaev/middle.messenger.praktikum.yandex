import { getHHMM } from "../../../../lib/core/time";
import { Message } from "../../sidebar/types";

export const mapMessages = (data: any, userId: number): Message[] => {
	return data.map((item: any) => ({
		time: getHHMM(item.time),
		text: item.content,
		isUserMessage: item.user_id === userId,
	}));
};
