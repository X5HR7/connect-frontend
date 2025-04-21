import { fetchUserServers } from '@shared/libs/api/servers/user-servers.ts';
import { IServer } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useQuery } from '@tanstack/react-query';

export const useServers = () => {
	const { accessToken } = useAuthStore();

	return useQuery<IServer[]>({
		retry: false,
		queryFn: fetchUserServers,
		queryKey: ['userServers'],
		enabled: !!accessToken
	});
};
