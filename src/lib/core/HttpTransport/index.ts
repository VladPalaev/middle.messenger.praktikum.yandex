import { queryStringify } from "./utils/queryStringify";

type Options = {
	method: keyof typeof HTTP.MEDHOD;
	headers?: Record<string, string>;
	data?: Record<string, unknown>;
	timeout?: number;
};

export class HTTP {
	public static MEDHOD = {
		GET: "GET",
		POST: "POST",
		PUT: "PUT",
		DELETE: "DELETE",
	} as const;
	private baseUrl: string;

	public constructor(baseUrl: string, endpoint = "") {
		this.baseUrl = `${baseUrl}${endpoint}`;
	}

	private _request<Response>(
		url: string,
		options: Options
	): Promise<Response> {
		const { method, headers, data, timeout = 5000 } = options;

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			xhr.open(method, url);

			xhr.withCredentials = true;
			xhr.timeout = timeout;
			xhr.responseType = "json";

			if (headers) {
				Object.entries(headers).forEach(([key, value]) => {
					xhr.setRequestHeader(key, value);
				});
			} else if (!(data instanceof FormData)) {
				xhr.setRequestHeader(
					"Content-Type",
					"application/json; charset=utf-8"
				);
			}

			if (method === HTTP.MEDHOD.GET || !data) {
				xhr.send();
			} else if (data instanceof FormData) {
				xhr.send(data);
			} else {
				xhr.send(JSON.stringify(data)); // нужно добавить пропуск знаков html
			}

			xhr.onreadystatechange = () => {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status < 400) {
						try {
							resolve(
								JSON.parse(xhr.response as string) as Response
							);
						} catch (e) {
							resolve(xhr.response as Response);
						}
					} else {
						reject(xhr.response);
					}
				}
			};

			xhr.ontimeout = () => reject(new Error("Время запроса истекло"));
			xhr.onerror = () =>
				reject(new Error("Произошла ошибка при отправке запроса"));
			xhr.onabort = () => reject(new Error("Запрос был отменен"));
		});
	}

	public get<Response>(
		url: string,
		options: Omit<Options, "method"> = {}
	): Promise<Response> {
		let fullUrl = this.baseUrl + url;

		if (options.data) {
			fullUrl += queryStringify(options.data);
		}

		return this._request(fullUrl, { ...options, method: HTTP.MEDHOD.GET });
	}

	public post<Response>(
		url: string,
		options: Omit<Options, "method"> = {}
	): Promise<Response> {
		return this._request(this.baseUrl + url, {
			...options,
			method: HTTP.MEDHOD.POST,
		});
	}

	public put<Response>(
		url: string,
		options: Omit<Options, "method"> = {}
	): Promise<Response> {
		return this._request<Response>(this.baseUrl + url, {
			...options,
			method: HTTP.MEDHOD.PUT,
		});
	}

	public delete<Response>(
		url: string,
		options: Omit<Options, "method"> = {}
	): Promise<Response> {
		return this._request<Response>(this.baseUrl + url, {
			...options,
			method: HTTP.MEDHOD.DELETE,
		});
	}
}
