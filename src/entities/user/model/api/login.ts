import { IUserWithProfile } from '@shared/libs/interfaces';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

export interface AuthLoginDto {
	email: string;
	password: string;
}

export interface AuthLoginResponse {
	user: IUserWithProfile;
	accessToken: string;
}

export const login = async (dto: AuthLoginDto): Promise<AuthLoginResponse> => {
	const response = await fetch(`${BASE_SERVER_URL}/auth/login`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dto)
	});

	if (!response.ok) {
		switch (response.status) {
			case 400:
				throw new Error('Некорректные данные для авторизации.');
			case 401:
				throw new Error('Неправильная почта или пароль.');
			case 500:
				throw new Error('Произошла внутренняя ошибка сервера, попробуйте попытку позже.');
			default:
				throw new Error('Произошла ошибка при входе.');
		}
	}

	return response.json();
};
