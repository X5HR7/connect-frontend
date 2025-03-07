import { IUserWithProfile } from '@shared/libs/interfaces';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

export interface AuthRegisterDto {
	email: string;
	displayName?: string;
	username: string;
	password: string;
}

export interface AuthRegisterResponse {
	user: IUserWithProfile;
	accessToken: string;
}

export const register = async (dto: AuthRegisterDto): Promise<AuthRegisterResponse> => {
	const response = await fetch(`${BASE_SERVER_URL}/auth/register`, {
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
				throw new Error('Email или имя пользователя уже заняты.');
			case 500:
				throw new Error('Произошла внутренняя ошибка сервера, попробуйте попытку позже.');
			default:
				throw new Error('Произошла ошибка при входе.');
		}
	}

	return response.json();
};
