import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@entities/user';
import { TUserRequests, fetchUserFriendsRequests } from '../api/friends.ts';

export const useFetchFriendsRequests = () => {
	const accessToken = useAuthStore(state => state.accessToken);

	return useQuery<TUserRequests>({
		retry: false,
		queryFn: fetchUserFriendsRequests,
		queryKey: ['userFriendsRequests'],
		enabled: !!accessToken
	});
};
