import { fetchUpdateUserStatus } from '@shared/libs/api/user/user.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useMutation } from '@tanstack/react-query';

export const useStatusUpdate = () => {
	const { setUser } = useAuthStore();
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
