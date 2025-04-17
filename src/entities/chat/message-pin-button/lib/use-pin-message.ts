import { fetchPinChatMessage } from '@shared/libs/api/chat/message.ts';
import { useMutation } from '@tanstack/react-query';

export const usePinMessage = () => {
	return useMutation({
		mutationKey: ['pinMessage'],
		mutationFn: fetchPinChatMessage,
		retry: false
	});
};
