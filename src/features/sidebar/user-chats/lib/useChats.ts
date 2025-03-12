import { fetchUserChats } from '@shared/libs/api/friends/user-friends.ts';
import { IChat } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useQuery } from '@tanstack/react-query';

export const useChats = () => {
	const { accessToken } = useAuthStore();

	return useQuery<IChat[]>({
		retry: false,
		queryFn: fetchUserChats,
		queryKey: ['userChats'],
		enabled: !!accessToken
	});
};
