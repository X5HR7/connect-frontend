interface IFormItem {
	title: string;
	type?: 'email' | 'password' | 'text';
	required?: boolean;
	description?: string;
	register?: any;
	error: string | undefined;
}

export type { IFormItem };
