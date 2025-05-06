import { fetchFriendRequestAccept } from '@shared/libs/api/friends/friends.ts';
import { useMutation } from '@tanstack/react-query';

export const useFriendRequestAccept = () => {
	return useMutation({
		retry: false,
		mutationFn: fetchFriendRequestAccept,
		onError: error => {
			console.error(error);
		}
	});
};
