import { fetchFriendDelete } from '@shared/libs/api/friends/friends.ts';
import { useMutation } from '@tanstack/react-query';

export const useDeleteFriend = () => {
	return useMutation({
		mutationFn: fetchFriendDelete,
		retry: false,
		mutationKey: ['fetchDeleteFriend']
	});
};
