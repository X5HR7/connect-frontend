import { useMutation } from '@tanstack/react-query';
import { fetchSendFriendRequest } from '@entities/friend';

export const useSendFriendRequest = () => {
	return useMutation({
		mutationFn: fetchSendFriendRequest,
		retry: false,
		mutationKey: ['fetchSendFriendRequest']
	});
};
