import { validateSendMessage } from "../rules/chat_room/rule";
import { createValidator } from "../services/validation";

const rules = {
	message: validateSendMessage,
};

const errors = {
	message: "Пустое сообщение",
};

export const validateInputSendMsg = createValidator(rules, errors);
