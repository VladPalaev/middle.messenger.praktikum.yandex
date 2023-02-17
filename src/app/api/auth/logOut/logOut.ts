import { HTTP } from "../../../../lib/core/HttpTransport";

const LogOutInstace = new HTTP("/auth/logout");

export class LogOut {
	public post() {
		return LogOutInstace.post("");
	}
}
