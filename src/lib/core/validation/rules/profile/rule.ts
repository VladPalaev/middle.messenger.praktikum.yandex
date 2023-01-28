import { all } from "../../services/validation";
import { contains, inRange, notEmpty } from "../../utils";
import { MAX_DISPLAYNAME_LENGTH, MIN_DISPLAYNAME_LENGTH } from "./var";

const isValidDisplayNameLength = (data) => {
	return inRange(data.length, MIN_DISPLAYNAME_LENGTH, MAX_DISPLAYNAME_LENGTH);
};

const isValidDisplayName = (data: string) => {
	return contains(data, /[a-zа-я_]/i);
};

const dispalyNameRules = [
	notEmpty,
	isValidDisplayNameLength,
	isValidDisplayName,
];

export const validateDisplayName = all(dispalyNameRules);
