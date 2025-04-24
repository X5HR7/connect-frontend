import { fetchUpdateUserEmail } from '@shared/libs/api/user/user.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useMutation } from '@tanstack/react-query';

export const useUpdateEmail = () => {
	const { setUser } = useAuthStore();

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
