import { fetchWithAuth } from '@shared/libs/api/api-client.ts';
import { IMessage } from '@shared/libs/interfaces';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

export const fetchPinChatMessage = (messageId: string) => {
	return fetchWithAuth<IMessage>(`${BASE_SERVER_URL}/chats/messages/${messageId}/pin`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
