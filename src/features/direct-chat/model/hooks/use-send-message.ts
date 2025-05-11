import { useMutation } from '@tanstack/react-query';
import { fetchSendChatMessage } from '@features/direct-chat/model';

export const useSendMessage = () => {
	return useMutation({
		mutationFn: fetchSendChatMessage,
		retry: false,
		mutationKey: ['sendChatMessage']
	});
};
