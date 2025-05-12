import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@entities/user';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { fetchUserFriends } from '../api/friends.ts';

export const useFetchFriends = () => {
	const accessToken = useAuthStore(state => state.accessToken);

	return useQuery<IUserWithProfile[]>({
		retry: false,
		queryFn: fetchUserFriends,
		queryKey: ['userFriends'],
		enabled: !!accessToken
	});
};
