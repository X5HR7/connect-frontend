import { TUserRequests, fetchUserFriendsRequests } from '@shared/libs/api/friends/friends.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useQuery } from '@tanstack/react-query';

export const useFetchFriendsRequests = () => {
	const { accessToken } = useAuthStore();

	return useQuery<TUserRequests>({
		retry: false,
		queryFn: fetchUserFriendsRequests,
		queryKey: ['userFriendsRequests'],
		enabled: !!accessToken
	});
};
