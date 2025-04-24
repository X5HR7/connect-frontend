import { fetchUpdateUserName } from '@shared/libs/api/user/user.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useMutation } from '@tanstack/react-query';

export const useUpdateUsername = () => {
	const { setUser } = useAuthStore();

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
