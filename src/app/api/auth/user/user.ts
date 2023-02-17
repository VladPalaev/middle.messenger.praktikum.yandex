import { HTTP } from "../../../../lib/core/HttpTransport";
import { TUser } from "../../types";

const userInstance = new HTTP("/auth/user");

export class User {
	public get() {
		return userInstance.get<TUser>("");
	}
}
