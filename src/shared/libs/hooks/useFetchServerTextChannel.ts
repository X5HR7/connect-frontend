import { IServerChannelParams, fetchServerTextChannel } from '@shared/libs/api/servers/channel.ts';
import { IServerTextChannel } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useQuery } from '@tanstack/react-query';

export const useFetchServerTextChannel = (params: IServerChannelParams) => {
	const { accessToken } = useAuthStore();

	return useQuery<IServerTextChannel>({
		retry: false,
		queryKey: ['serverTextChannel', 'roles'],
		queryFn: () => fetchServerTextChannel(params),
		enabled: !!accessToken
	});
};
