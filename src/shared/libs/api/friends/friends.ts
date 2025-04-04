import { HttpError } from '@shared/libs/api/HttpError.ts';
import { fetchWithAuth } from '@shared/libs/api/api-client.ts';
import { IChat, IUserFriend, IUserFriendRequest, IUserWithProfile } from '@shared/libs/interfaces';
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

export const fetchSendFriendRequest = async (dto: { username: string }) => {
	try {
		return await fetchWithAuth<IUserFriendRequest>(`${BASE_SERVER_URL}/friends/requests`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dto)
		});
	} catch (error) {
		if (error instanceof HttpError) {
			let message = error.message;

			switch (error.statusCode) {
				case 400:
					message = 'Некорректное имя пользователя или вы уже добавили пользователя в друзья ранее.';
					break;
				case 404:
					message = 'Пользователь с таким именем не найден.';
					break;
				case 409:
					message = 'Запрос на добавление в друзья к данному пользоваелю уже был отправлен ранее.';
					break;
			}

			throw new Error(message);
		}
	}
};

export const fetchFriendRequestAccept = (requestId: string) => {
	return fetchWithAuth<IUserWithProfile>(`${BASE_SERVER_URL}/friends/requests/${requestId}`, {
		method: 'PATCH'
	});
};

export const fetchFriendRequestReject = (requestId: string) => {
	return fetchWithAuth<IUserFriendRequest>(`${BASE_SERVER_URL}/friends/requests/${requestId}`, {
		method: 'DELETE'
	});
};

export const fetchFriendDelete = (friendId: string) => {
	return fetchWithAuth<IUserFriend>(`${BASE_SERVER_URL}/friends/${friendId}`, {
		method: 'DELETE'
	});
};
