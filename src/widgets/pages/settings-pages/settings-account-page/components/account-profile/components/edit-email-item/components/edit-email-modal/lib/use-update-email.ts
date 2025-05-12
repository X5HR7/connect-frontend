import { useMutation } from '@tanstack/react-query';
import { fetchUpdateUserEmail, useAuthStore } from '@entities/user';

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
