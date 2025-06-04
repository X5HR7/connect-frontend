import { useMutation } from '@tanstack/react-query';
import { fetchFriendDelete } from '@entities/friend';

export const useDeleteFriend = () => {
	return useMutation({
		mutationFn: fetchFriendDelete,
		retry: false,
		mutationKey: ['fetchDeleteFriend']
	});
};
