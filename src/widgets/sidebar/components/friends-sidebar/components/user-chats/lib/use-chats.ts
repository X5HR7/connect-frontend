import { useQuery } from '@tanstack/react-query';
import { fetchUserChats } from '@features/direct-chat';
import { useAuthStore } from '@entities/user';
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
