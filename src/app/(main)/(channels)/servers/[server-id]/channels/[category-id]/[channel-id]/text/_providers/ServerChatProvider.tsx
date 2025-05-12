'use client';

import { FC, ReactNode, useEffect } from 'react';
import { useFetchServerTextChannel } from '@shared/libs/hooks/use-fetch-server-text-channel.ts';
import { useServerChatStore } from '@shared/store/serverChatStore.ts';

interface IServerChatProviderProps {
	children: ReactNode;
	serverId: string;
	categoryId: string;
	channelId: string;
}

const ServerChatProvider: FC<IServerChatProviderProps> = ({ children, serverId, categoryId, channelId }) => {
	const setChat = useServerChatStore(state => state.setChat);
	const { data, isPending } = useFetchServerTextChannel({ serverId, categoryId, channelId });

	useEffect(() => {
		if (!isPending && data) {
			setChat(data);
		}
	}, [isPending, data]);

	return <>{children}</>;
};

export { ServerChatProvider };
