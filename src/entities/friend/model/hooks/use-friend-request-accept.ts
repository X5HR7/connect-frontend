import { useMutation } from '@tanstack/react-query';
import { fetchFriendRequestAccept } from '../api/friends.ts';

export const useFriendRequestAccept = () => {
	return useMutation({
		retry: false,
		mutationFn: fetchFriendRequestAccept,
		onError: error => {
			console.warn(error);
		}
	});
};
