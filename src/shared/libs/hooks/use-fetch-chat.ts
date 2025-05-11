import { useQuery } from '@tanstack/react-query';
import { fetchChat } from '@features/direct-chat/model/api/chat.ts';
import { IChat } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';

export const useFetchChat = (chatId: string) => {
	const accessToken = useAuthStore(state => state.accessToken);

	return useQuery<IChat>({
		retry: false,
		queryFn: () => fetchChat(chatId),
		queryKey: ['chat', chatId],
		enabled: !!accessToken
	});
};
