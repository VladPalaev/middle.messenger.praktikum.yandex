import { HTTP } from "../../../../lib/core/HttpTransport";
import { TUser } from "../../types";
import {
	TChangePasswordRequestData,
	TChangeUserProfileRequestData,
} from "./types";

const userInstance = new HTTP("/user");

export class User {
	public getUser(id: string) {
		return userInstance.get<TUser>(`/${id}`);
	}

	public searchUser(data: { login: string }) {
		return userInstance.post<unknown, TUser[]>(`/search`, {
			data,
		});
	}

	public changeProfile(data: TChangeUserProfileRequestData) {
		return userInstance.put<TChangeUserProfileRequestData, TUser>(
			"/profile",
			{
				data,
			}
		);
	}

	public changeAvatar(data: FormData) {
		return userInstance.put("/avatar", {
			data,
		});
	}

	public changePassword(data: TChangePasswordRequestData) {
		return userInstance.put("/password", {
			data,
		});
	}
}
