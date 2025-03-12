import { fetchUserFriends } from '@shared/libs/api/friends/friends.ts';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useQuery } from '@tanstack/react-query';

export const useFriends = () => {
	const { accessToken } = useAuthStore();

	return useQuery<IUserWithProfile[]>({
		retry: false,
		queryFn: fetchUserFriends,
		queryKey: ['userFriends'],
		enabled: !!accessToken
	});
};
