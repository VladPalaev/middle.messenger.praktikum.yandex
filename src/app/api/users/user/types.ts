export type TChangeUserProfileRequestData = {
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	phone: string;
};

export type TChangePasswordRequestData = {
	oldPassword: string;
	newPassword: string;
};
