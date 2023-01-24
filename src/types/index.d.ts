// export type FnType<T> = (value: T) => T;
// export function useState<T>(initialState: T): [T, (value: T) => void];
export type FormAuthFields = {
	id: string;
	label: string;
	name: string;
	placeholder: string | " ";
	type: string;
};

export type FormAuthButtons = {
	id: string;
	className: string;
	label: string;
};

export interface IProfileInfo {
	email: string;
	login: string;
	first_name: string;
	second_name: string;
	nick_name: string;
	phone: string;
}
