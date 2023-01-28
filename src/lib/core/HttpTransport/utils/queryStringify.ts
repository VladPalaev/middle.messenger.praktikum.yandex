import { isEmptyObj } from "./isEmptyObj";

type QueryParams = {
	[N: string]: unknown;
};

export function queryStringify(params: QueryParams): string {
	if (isEmptyObj(params)) {
		return "";
	}

	return `?${Object.entries(params)
		.map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
		.join("&")}`;
}
