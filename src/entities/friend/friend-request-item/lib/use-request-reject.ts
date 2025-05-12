import { useMutation } from '@tanstack/react-query';
import { fetchFriendRequestReject } from '@entities/friend';

export const useRequestReject = () => {
	return useMutation({
		retry: false,
		mutationFn: fetchFriendRequestReject,
		onError: error => {
			console.error(error);
		}
	});
};
