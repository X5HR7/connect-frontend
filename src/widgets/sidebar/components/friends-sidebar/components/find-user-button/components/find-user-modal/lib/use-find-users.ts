import { useMutation } from '@tanstack/react-query';
import { fetchUsersByUsername } from '@entities/user';

export const useFindUsers = () => {
	return useMutation({
		mutationKey: ['findUsers'],
		mutationFn: fetchUsersByUsername,
		retry: false
	});
};
