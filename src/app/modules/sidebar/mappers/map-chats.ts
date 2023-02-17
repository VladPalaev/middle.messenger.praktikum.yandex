import { getHHMM } from "../../../../lib/core/time";
import { GetChatsResponse } from "../../../api/chats/chat/type";
import { TChatInfo } from "../types";
import defaultAvatar from "../../../../../static/icons/avatar_default.png";

export const mapChats = (chats: GetChatsResponse[]): TChatInfo[] => {
	return chats.map((chat) => ({
		id: String(chat.id),
		avatarUrl: chat.avatar ?? defaultAvatar,
		countMessages: String(chat.unread_count),
		lastMessage: chat.last_message?.content ?? "",
		timeMessage: getHHMM(chat.last_message?.time),
		userName: chat.title,
	}));
};
