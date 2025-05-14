import { useMutation } from '@tanstack/react-query';
import { fetchDeleteMessage } from '@features/direct-chat/model';
import { useChatStore } from '@entities/direct-chat';

export const useDeleteMessage = () => {
	const deleteMessage = useChatStore(state => state.deleteMessage);

	return useMutation({
		mutationKey: ['deleteMessage'],
		mutationFn: fetchDeleteMessage,
		onSuccess: message => {
			if (message?.id) {
				deleteMessage(message);
			}
		}
	});
};
