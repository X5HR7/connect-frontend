import { fetchSendChatMessage } from '@shared/libs/api/chat/chat.ts';
import { useMutation } from '@tanstack/react-query';

export const useSendMessage = () => {
	return useMutation({
		mutationFn: fetchSendChatMessage,
		retry: false,
		mutationKey: ['sendChatMessage']
	});
};
