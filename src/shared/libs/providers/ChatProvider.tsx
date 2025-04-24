'use client';

import { useFetchChat } from '@shared/libs/hooks/use-fetch-chat.ts';
import { urls } from '@shared/libs/utils/url.config.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useChatStore } from '@shared/store/chatStore.ts';
import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect } from 'react';

interface IChatProviderProps {
	children: ReactNode;
	chatId: string;
}

const ChatProvider: FC<IChatProviderProps> = ({ children, chatId }) => {
	const { user } = useAuthStore();
	const { setChat, clearChat } = useChatStore();
	const { data, isPending } = useFetchChat(chatId);
	const router = useRouter();

	useEffect(() => {
		if (!isPending) {
			if (data) {
				const receiver = data.chatMembers.filter(member => member.memberId !== user?.id)[0];
				if (receiver) {
					setChat(data, receiver);
				}
			} else {
				router.replace(urls.NOT_FOUND);
			}
		}
	}, [isPending, data, user]);

	useEffect(() => {
		return () => {
			clearChat();
		};
	}, []);

	return <>{children}</>;
};

export { ChatProvider };
