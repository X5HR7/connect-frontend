'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { useAuthStore } from '@entities/user';
import { fetchServer } from '@shared/libs/api/servers/user-servers.ts';
import { IFServer } from '@shared/libs/interfaces/server.interface.ts';
import { useServerStore } from '@shared/store/serverStore.ts';

export const ServerProvider = ({ children }: { children: ReactNode }) => {
	const { 'server-id': serverId } = useParams<{ 'server-id': string }>();
	const accessToken = useAuthStore(state => state.accessToken);
	const setServer = useServerStore(state => state.setServer);

	const { data: server, isPending } = useQuery<IFServer>({
		retry: false,
		queryFn: () => fetchServer(serverId),
		queryKey: ['server'],
		enabled: !!accessToken && !!serverId
	});

	useEffect(() => {
		if (!isPending && server) {
			setServer(server);
		}
	}, [server, isPending, setServer]);

	return <>{children}</>;
};
