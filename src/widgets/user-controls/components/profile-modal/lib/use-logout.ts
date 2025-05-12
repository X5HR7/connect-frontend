import { useMutation } from '@tanstack/react-query';
import { fetchLogout, useAuthStore } from '@entities/user';
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
