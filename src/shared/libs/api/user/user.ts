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

export const fetchUpdateUserEmail = (data: { email: string; password: string }) => {
	return fetchWithAuth<IUserWithProfile>(`${BASE_SERVER_URL}/users/me/email`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
};

export const fetchUpdateUserPassword = (data: { password: string; newPassword: string }) => {
	return fetchWithAuth<IUserWithProfile>(`${BASE_SERVER_URL}/users/me/password`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
};

export const fetchUpdateUserPhone = (data: { phone: string; password: string }) => {
	return fetchWithAuth<IUserWithProfile>(`${BASE_SERVER_URL}/users/me/phone`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
};

export const fetchUpdateUserName = (data: { username: string; password: string }) => {
	return fetchWithAuth<IUserWithProfile>(`${BASE_SERVER_URL}/users/me/username`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
};

export const fetchUserInfo = (userId: string) => {
	return fetchWithAuth<IUserWithProfile>(`${BASE_SERVER_URL}/users/info/${userId}`, {
		method: 'GET'
	});
};
