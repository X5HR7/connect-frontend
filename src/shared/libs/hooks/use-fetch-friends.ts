import { useQuery } from '@tanstack/react-query';
import { fetchUserFriends } from '@shared/libs/api/friends/friends.ts';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';

export const useFetchFriends = () => {
	const accessToken = useAuthStore(state => state.accessToken);

	return useQuery<IUserWithProfile[]>({
		retry: false,
		queryFn: fetchUserFriends,
		queryKey: ['userFriends'],
		enabled: !!accessToken
	});
};
