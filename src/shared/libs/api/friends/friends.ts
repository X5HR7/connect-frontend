import { fetchWithAuth } from '@shared/libs/api/api-client.ts';
import { IChat, IUserFriendRequest, IUserWithProfile } from '@shared/libs/interfaces';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

export const fetchUserChats = (): Promise<IChat[]> => {
	return fetchWithAuth<IChat[]>(`${BASE_SERVER_URL}/chats`, {
		method: 'GET'
	});
};

export const fetchUserFriends = (): Promise<IUserWithProfile[]> => {
	return fetchWithAuth<IUserWithProfile[]>(`${BASE_SERVER_URL}/friends`, {
		method: 'GET'
	});
};

export const fetchUserFriendsRequests = (): Promise<IUserFriendRequest[]> => {
	return fetchWithAuth<IUserFriendRequest[]>(`${BASE_SERVER_URL}/friends/requests`, {
		method: 'GET'
	});
};

export const fetchSendFriendRequest = async (username: string) => {
	const response = await fetchWithAuth<IUserFriendRequest>(`${BASE_SERVER_URL}/friends/requests/${username}`, {
		method: 'POST'
	});

	//тут надо обрабатывать ошибки в зависимости от кода ошибки
};
