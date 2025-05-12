import { useQuery } from '@tanstack/react-query';
import { fetchUserInfo, useAuthStore } from '@entities/user';

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
