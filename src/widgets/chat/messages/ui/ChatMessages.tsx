'use client';

import { ChatInput } from '@features/chat/chat-input';
import { UserMessage } from '@features/chat/message';
import { useChatStore } from '@shared/store/chatStore.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './ChatMessages.module.scss';

const UserChatProfile = dynamic(() => import('@entities/chat/user-chat-profile'));

const ChatMessages: FC = () => {
	const { messages, chatMembers } = useChatStore();

	return (
		<section className={styles.messages}>
			<ul className={styles.messages__list}>
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
			</ul>
			<div className={styles.messages__input}>
				<ChatInput />
			</div>
		</section>
	);
};

export { ChatMessages };
