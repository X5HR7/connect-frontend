import { useMutation } from '@tanstack/react-query';
import { fetchLogout } from '@shared/libs/api/auth/logout.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useSocketStore } from '@shared/store/socketStore.ts';

export const useLogout = () => {
	const clearAuth = useAuthStore(state => state.clearAuth);
	const disconnect = useSocketStore(state => state.disconnect);

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
