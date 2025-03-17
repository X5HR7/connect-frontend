'use client';

import { fetchServer } from '@shared/libs/api/servers/user-servers.ts';
import { IFServer } from '@shared/libs/interfaces/server.interface.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useServerStore } from '@shared/store/serverStore.ts';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

export const ServerProvider = ({ children }: { children: ReactNode }) => {
	const { 'server-id': serverId }: { 'server-id': string } = useParams();
	const { accessToken } = useAuthStore();
	const { setServer } = useServerStore();

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
