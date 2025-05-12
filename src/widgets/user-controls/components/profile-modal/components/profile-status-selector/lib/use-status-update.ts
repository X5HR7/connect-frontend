import { useMutation } from '@tanstack/react-query';
import { fetchUpdateUserStatus, useAuthStore } from '@entities/user';

export const useStatusUpdate = () => {
	const setUser = useAuthStore(state => state.setUser);

	return useMutation({
		retry: false,
		mutationFn: fetchUpdateUserStatus,
		mutationKey: ['updateStatus'],
		onSuccess: user => {
			if (user.id) {
				setUser(user);
			}
		}
	});
};
