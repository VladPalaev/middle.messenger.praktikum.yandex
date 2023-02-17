export type SingUpRequestData = {
	first_name: string;
	second_name: string;
	login: string;
	phone: string;
	pasword: string;
	email: string;
};

export type SignUpResponseData = {
	id: string;
};

export type SignUpResponseError = {
	reason: string;
};
