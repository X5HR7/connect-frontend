import { IUserWithProfile } from '@shared/libs/interfaces';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

interface AuthRegisterDto {
	email: string;
	displayName: string;
	username: string;
	password: string;
}

interface AuthRegisterResponse {
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
		throw new Error('Register failed');
	}

	return response.json();
};
