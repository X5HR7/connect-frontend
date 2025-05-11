import { useMutation } from '@tanstack/react-query';
import { fetchPinChatMessage } from '@features/direct-chat/model';
import { useChatStore } from '@entities/chat';

export const usePinMessage = (messageId: string) => {
	const updateMessage = useChatStore(state => state.updateMessage);

	return useMutation({
		mutationKey: [`pinDirectChatMessage ${messageId}`],
		mutationFn: fetchPinChatMessage,
		retry: false,
		onSuccess: message => {
			if (message?.id) {
				updateMessage(message);
			}
		}
	});
};
