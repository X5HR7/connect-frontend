import { fetchUsersByUsername } from '@shared/libs/api/user/user.ts';
import { useMutation } from '@tanstack/react-query';

export const useFindUsers = () => {
	return useMutation({
		mutationKey: ['findUsers'],
		mutationFn: fetchUsersByUsername,
		retry: false
	});
};
