import { HttpError } from '@shared/libs/api/HttpError.ts';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants';
import { useAuthStore } from '@shared/store/authStore';

export interface AuthResponse {
	user: IUserWithProfile;
	accessToken: string;
}

export const getNewAccessTokenClient = async (): Promise<AuthResponse> => {
	const response = await fetch(`${BASE_SERVER_URL}/auth/login/access-token`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (!response.ok) {
		throw new Error('Failed to refresh token');
	}

	return response.json();
};

export const getNewAccessToken = async (token: string): Promise<AuthResponse> => {
	const response = await fetch(`${BASE_SERVER_URL}/auth/login/access-token`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			Cookie: `refresh_token=${token}`
		}
	});

	if (!response.ok) {
		throw new Error('Failed to refresh token');
	}

	return response.json();
};

export const fetchWithAuth = async <T>(input: RequestInfo, init?: RequestInit): Promise<T> => {
	const { accessToken, setAccessToken, clearAuth } = useAuthStore.getState();

	const headers = new Headers(init?.headers);
	if (accessToken) {
		headers.append('Authorization', `Bearer ${accessToken}`);
	}

	let response: Response;

	try {
		response = await fetch(input, {
			...init,
			headers
		});

		if (response.status === 401) {
			try {
				const { accessToken } = await getNewAccessTokenClient();
				setAccessToken(accessToken);

				headers.set('Authorization', `Bearer ${accessToken}`);
				response = await fetch(input, {
					...init,
					headers
				});

				if (!response.ok) {
					clearAuth();
					throw new HttpError('Request failed after token refresh', response.status);
				}
			} catch (error) {
				throw error;
			}
		}

		if (!response.ok) {
			throw new HttpError(response.statusText, response.status);
		}

		return (await response.json()) as Promise<T>;
	} catch (error) {
		throw error;
	}
};
