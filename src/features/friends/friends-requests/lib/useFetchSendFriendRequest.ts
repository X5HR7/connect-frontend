import { fetchSendFriendRequest } from '@shared/libs/api/friends/friends.ts';
import { useMutation } from '@tanstack/react-query';

export const useFetchSendFriendRequest = () => {
	return useMutation({
		mutationFn: fetchSendFriendRequest,
		retry: false,
		mutationKey: ['fetchSendFriendRequest']
	});
};
