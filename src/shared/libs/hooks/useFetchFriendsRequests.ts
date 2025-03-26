import { fetchUserFriendsRequests } from '@shared/libs/api/friends/friends.ts';
import { IUserFriendRequest } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useQuery } from '@tanstack/react-query';

export const useFetchFriendsRequests = () => {
	const { accessToken } = useAuthStore();

	return useQuery<IUserFriendRequest[]>({
		retry: false,
		queryFn: fetchUserFriendsRequests,
		queryKey: ['userFriendsRequests'],
		enabled: !!accessToken
	});
};
