'use client';

import { useFetchChat } from '@shared/libs/hooks/useFetchChat.ts';
import { urls } from '@shared/libs/utils/url.config.ts';
import { useChatStore } from '@shared/store/chatStore.ts';
import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect } from 'react';

interface IChatProviderProps {
	children: ReactNode;
	chatId: string;
}

const ChatProvider: FC<IChatProviderProps> = ({ children, chatId }) => {
	const { setChat, clearChat } = useChatStore();
	const { data, isPending } = useFetchChat(chatId);
	const router = useRouter();

	useEffect(() => {
		if (!isPending) {
			if (data) {
				setChat(data);
			} else {
				router.replace(urls.NOT_FOUND);
			}
		}
	}, [isPending, data]);

	useEffect(() => {
		return () => {
			clearChat();
		};
	}, []);

	return <>{children}</>;
};

export { ChatProvider };
