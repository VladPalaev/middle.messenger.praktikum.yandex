import { all } from "../../services/validation";
import { notEmpty } from "../../utils";

const sendMessageRules = [notEmpty];

export const validateSendMessage = all(sendMessageRules);
