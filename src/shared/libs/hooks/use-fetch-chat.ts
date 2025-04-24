import { fetchChat } from '@shared/libs/api/chat/chat.ts';
import { IChat } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useQuery } from '@tanstack/react-query';

export const useFetchChat = (chatId: string) => {
	const { accessToken } = useAuthStore();

	return useQuery<IChat>({
		retry: false,
		queryFn: () => fetchChat(chatId),
		queryKey: ['chat', chatId],
		enabled: !!accessToken
	});
};
