import { fetchWithAuth } from '@shared/libs/api/api-client.ts';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

interface LogoutResponse {
	message: string;
}

export const fetchLogout = (): Promise<LogoutResponse> => {
	return fetchWithAuth<LogoutResponse>(`${BASE_SERVER_URL}/auth/logout`, {
		method: 'POST',
		credentials: 'include'
	});
};
