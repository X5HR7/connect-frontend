import { useQuery } from '@tanstack/react-query';
import { TUserRequests, fetchUserFriendsRequests } from '@shared/libs/api/friends/friends.ts';
import { useAuthStore } from '@shared/store/authStore.ts';

export const useFetchFriendsRequests = () => {
	const accessToken = useAuthStore(state => state.accessToken);

	return useQuery<TUserRequests>({
		retry: false,
		queryFn: fetchUserFriendsRequests,
		queryKey: ['userFriendsRequests'],
		enabled: !!accessToken
	});
};
