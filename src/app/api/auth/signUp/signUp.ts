import { HTTP } from "../../../../lib/core/HttpTransport";
import { SingUpRequestData, SignUpResponseData } from "./types";

const SignUpInstance = new HTTP("/auth/signup");

export class SignUp {
	public post<T = SingUpRequestData, K = SignUpResponseData>(data: T) {
		return SignUpInstance.post<T, K>("", { data });
	}
}
