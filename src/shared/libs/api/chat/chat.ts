import { fetchWithAuth } from '@shared/libs/api/api-client.ts';
import { IChat } from '@shared/libs/interfaces';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

export const fetchChat = (id: string): Promise<IChat> => {
	return fetchWithAuth<IChat>(`${BASE_SERVER_URL}/chats/users/${id}`, {
		method: 'GET'
	});
};
