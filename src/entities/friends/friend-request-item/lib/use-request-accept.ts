import { fetchFriendRequestAccept } from '@shared/libs/api/friends/friends.ts';
import { useMutation } from '@tanstack/react-query';

export const useRequestAccept = () => {
	return useMutation({
		retry: false,
		mutationFn: fetchFriendRequestAccept,
		onError: error => {
			console.error(error);
		}
	});
};
