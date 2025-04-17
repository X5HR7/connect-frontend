'use client';

import { useFetchServerTextChannel } from '@shared/libs/hooks/useFetchServerTextChannel.ts';
import { useServerChatStore } from '@shared/store/serverChatStore.ts';
import { FC, ReactNode, useEffect } from 'react';

interface IServerChatProviderProps {
	children: ReactNode;
	serverId: string;
	categoryId: string;
	channelId: string;
}

const ServerChatProvider: FC<IServerChatProviderProps> = ({ children, serverId, categoryId, channelId }) => {
	const { setChat } = useServerChatStore();
	const { data, isPending } = useFetchServerTextChannel({ serverId, categoryId, channelId });

	useEffect(() => {
		if (!isPending && data) {
			setChat(data);
		}
	}, [isPending, data]);

	return <>{children}</>;
};

export { ServerChatProvider };
