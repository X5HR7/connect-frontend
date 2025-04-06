import { fetchWithAuth } from '@shared/libs/api/api-client.ts';
import { IUserWithProfile, TProfileStatus } from '@shared/libs/interfaces/user.interface.ts';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

export const fetchUpdateUserStatus = (status: TProfileStatus) => {
	return fetchWithAuth<IUserWithProfile>(`${BASE_SERVER_URL}/users/me/status`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ status })
	});
};

export const fetchUserInfo = (userId: string) => {
	return fetchWithAuth<IUserWithProfile>(`${BASE_SERVER_URL}/users/info/${userId}`, {
		method: 'GET'
	});
};
