export function contains(value: string, regExp: RegExp): boolean {
	return value.search(regExp) >= 0;
}
