import { useMutation } from '@tanstack/react-query';
import { fetchUpdateUserStatus } from '@shared/libs/api/user/user.ts';
import { useAuthStore } from '@shared/store/authStore.ts';

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
