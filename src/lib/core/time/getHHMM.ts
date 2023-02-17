export function getHHMM(date: Date | string | number | undefined) {
	if (date == undefined) {
		return "";
	}
	const dateObj = date instanceof Date ? date : new Date(date);

	const hours = dateObj.getHours();
	const minutes = `0${dateObj.getMinutes()}`;

	return `${hours}:${minutes.slice(-2)}`;
}
