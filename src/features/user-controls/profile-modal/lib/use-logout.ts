import { fetchLogout } from '@shared/libs/api/auth/logout.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useSocketStore } from '@shared/store/socketStore.ts';
import { useMutation } from '@tanstack/react-query';

export const useLogout = () => {
	const { clearAuth } = useAuthStore();
	const { disconnect } = useSocketStore();

	return useMutation({
		retry: false,
		mutationFn: fetchLogout,
		onSuccess: data => {
			if (data.message) {
				clearAuth();
				disconnect();
			}
		}
	});
};
