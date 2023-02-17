export type SignInRequestData = {
	login: string;
	password: string;
};

export type SignInResponseData = {
	status: string;
	code?: string;
};
export type SignInResponseError = {
	reason: string;
};
