import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@entities/user';
import { fetchUserChats } from '@shared/libs/api/friends/friends.ts';
import { IChat } from '@shared/libs/interfaces';

export const useChats = () => {
	const accessToken = useAuthStore(state => state.accessToken);

	return useQuery<IChat[]>({
		retry: false,
		queryFn: fetchUserChats,
		queryKey: ['userChats'],
		enabled: !!accessToken
	});
};
