import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@entities/user';
import { IChat } from '@shared/libs/interfaces';
import { fetchChat } from '../api/chat.ts';

export const useFetchChat = (chatId: string) => {
	const accessToken = useAuthStore(state => state.accessToken);

	return useQuery<IChat>({
		retry: false,
		queryFn: () => fetchChat(chatId),
		queryKey: ['chat', chatId],
		enabled: !!accessToken
	});
};
