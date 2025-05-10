import { useQuery } from '@tanstack/react-query';
import { fetchUserChats } from '@shared/libs/api/friends/friends.ts';
import { IChat } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';

export const useChats = () => {
	const accessToken = useAuthStore(state => state.accessToken);

	return useQuery<IChat[]>({
		retry: false,
		queryFn: fetchUserChats,
		queryKey: ['userChats'],
		enabled: !!accessToken
	});
};
