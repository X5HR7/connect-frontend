'use client';

import { useParams, useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { useFetchChat } from '@features/direct-chat';
import { useChatStore } from '@entities/chat/model/chatStore.ts';
import { useAuthStore } from '@entities/user';
import { urls } from '@shared/libs/utils/url.config.ts';

interface ChatProviderProps {
	children: ReactNode;
}

const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
	const { 'chat-id': chatId } = useParams<{ 'chat-id': string }>();
	const user = useAuthStore(state => state.user);
	const { setChat, clearChat } = useChatStore(
		useShallow(state => ({ setChat: state.setChat, clearChat: state.clearChat }))
	);
	const { data, isPending } = useFetchChat(chatId);
	const router = useRouter();

	useEffect(() => {
		if (!isPending) {
			if (data) {
				const receiver = data.chatMembers.filter(member => member.userId !== user?.id)[0];
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
