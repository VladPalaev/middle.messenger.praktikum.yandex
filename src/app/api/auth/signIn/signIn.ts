import { HTTP } from "../../../../lib/core/HttpTransport";
import { SignInRequestData, SignInResponseData } from "./types";

const SignInInstance = new HTTP("/auth/signin");

export class SignIn {
	public post<T = SignInRequestData, K = SignInResponseData>(data: T) {
		return SignInInstance.post<T, K>("", { data: data });
	}
}
