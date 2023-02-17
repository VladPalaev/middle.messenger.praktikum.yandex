import { HTTP } from "./index";

export abstract class BaseApi {
	protected http: HTTP;

	protected constructor(endpoint: string) {
		this.http = new HTTP(endpoint);
	}
	protected create() {
		throw new Error("Метод неопредлен");
	}

	protected read() {
		throw new Error("Метод неопредлен");
	}

	protected update() {
		throw new Error("Метод неопредлен");
	}

	protected delete() {
		throw new Error("Метод неопредлен");
	}
}
