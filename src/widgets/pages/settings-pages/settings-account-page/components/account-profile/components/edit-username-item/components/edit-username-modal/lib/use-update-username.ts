import { useMutation } from '@tanstack/react-query';
import { fetchUpdateUserName, useAuthStore } from '@entities/user';

export const useUpdateUsername = () => {
	const setUser = useAuthStore(state => state.setUser);

	return useMutation({
		mutationKey: ['updateUsername'],
		mutationFn: fetchUpdateUserName,
		retry: false,
		onSuccess: user => {
			if (user.id) {
				setUser(user);
			}
		}
	});
};
