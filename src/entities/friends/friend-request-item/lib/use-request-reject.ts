import { fetchFriendRequestReject } from '@shared/libs/api/friends/friends.ts';
import { useMutation } from '@tanstack/react-query';

export const useRequestReject = () => {
	return useMutation({
		retry: false,
		mutationFn: fetchFriendRequestReject,
		onError: error => {
			console.error(error);
		}
	});
};
