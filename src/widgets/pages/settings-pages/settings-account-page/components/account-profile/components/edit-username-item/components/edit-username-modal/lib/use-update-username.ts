import { useMutation } from '@tanstack/react-query';
import { fetchUpdateUserName } from '@shared/libs/api/user/user.ts';
import { useAuthStore } from '@shared/store/authStore.ts';

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
