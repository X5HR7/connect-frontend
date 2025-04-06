import { fetchUserInfo } from '@shared/libs/api/user/user.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useQuery } from '@tanstack/react-query';

export const useFetchUserInfo = (userId: string) => {
	const { accessToken } = useAuthStore();

	return useQuery({
		queryFn: () => fetchUserInfo(userId),
		queryKey: ['getUserInfo', userId],
		retry: true,
		retryDelay: 60 * 1000,
		enabled: !!accessToken && !!userId
	});
};
