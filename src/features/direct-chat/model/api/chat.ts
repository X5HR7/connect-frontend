import { fetchWithAuth } from '@shared/libs/api/api-client.ts';
import { IChat, IMessage } from '@shared/libs/interfaces';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

export const fetchUserChats = (): Promise<IChat[]> => {
	return fetchWithAuth<IChat[]>(`${BASE_SERVER_URL}/chats`, {
		method: 'GET'
	});
};

export const fetchChat = (id: string): Promise<IChat> => {
	return fetchWithAuth<IChat>(`${BASE_SERVER_URL}/chats/users/${id}`, {
		method: 'GET'
	});
};

export const fetchSendChatMessage = ({
	text,
	chatId,
	parentId
}: {
	text: string;
	chatId: string;
	parentId?: string;
}): Promise<IMessage> => {
	return fetchWithAuth<IMessage>(`${BASE_SERVER_URL}/chats/${chatId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(parentId ? { content: text, parentId: parentId } : { content: text })
	});
};
