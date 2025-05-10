import { useMutation } from '@tanstack/react-query';
import { fetchUpdateUserEmail } from '@shared/libs/api/user/user.ts';
import { useAuthStore } from '@shared/store/authStore.ts';

export const useUpdateEmail = () => {
	const setUser = useAuthStore(state => state.setUser);

	return useMutation({
		mutationKey: ['updateEmail'],
		mutationFn: fetchUpdateUserEmail,
		retry: false,
		onSuccess: user => {
			if (user.id) {
				setUser(user);
			}
		}
	});
};
