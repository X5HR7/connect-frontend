import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@entities/user';
import { IServerChannelParams, fetchServerTextChannel } from '@shared/libs/api/servers/channel.ts';
import { IServerTextChannel } from '@shared/libs/interfaces';

export const useFetchServerTextChannel = (params: IServerChannelParams) => {
	const accessToken = useAuthStore(state => state.accessToken);

	return useQuery<IServerTextChannel>({
		retry: false,
		queryKey: ['serverTextChannel', 'roles'],
		queryFn: () => fetchServerTextChannel(params),
		enabled: !!accessToken
	});
};
