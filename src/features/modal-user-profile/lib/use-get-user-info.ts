import { useQuery } from '@tanstack/react-query';
import { fetchUserInfo } from '@shared/libs/api/user/user.ts';
import { useAuthStore } from '@shared/store/authStore.ts';

export const useGetUserInfo = (userId: string) => {
	const accessToken = useAuthStore(state => state.accessToken);

	return useQuery({
		queryFn: () => fetchUserInfo(userId),
		queryKey: ['getUserInfo', userId],
		retry: true,
		retryDelay: 60 * 1000,
		enabled: !!accessToken && !!userId
	});
};
