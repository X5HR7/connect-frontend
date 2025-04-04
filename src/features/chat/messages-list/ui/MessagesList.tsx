'use client';

import { UserMessage } from '@entities/chat/message';
import { useChatStore } from '@shared/store/chatStore.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import dynamic from 'next/dynamic';
import { FC } from 'react';

const UserChatProfile = dynamic(() => import('@entities/chat/user-chat-profile'));

const MessagesList: FC = () => {
	const { messages, chatMembers } = useChatStore();

	return (
		<Scroll>
			{messages.length < 10 ? <UserChatProfile /> : null}
			{messages.map(message => (
				<UserMessage
					message={message}
					key={message.id}
					sender={chatMembers.filter(member => member.id === message.userId)[0]?.member}
				/>
			))}
		</Scroll>
	);
};

export { MessagesList };
