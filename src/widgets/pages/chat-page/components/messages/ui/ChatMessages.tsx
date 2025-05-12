'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { DirectChatInput, MemoizedDirectChatMessage } from '@features/direct-chat';
import { useChatStore } from '@entities/direct-chat';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import styles from './ChatMessages.module.scss';

const UserChatProfile = dynamic(() => import('@features/direct-chat'));

const ChatMessages: FC = () => {
	const messages = useChatStore(state => state.messages);
	const chatMembers = useChatStore(state => state.chatMembers);

	return (
		<section className={styles.messages}>
			<ul className={styles.messages__list}>
				<Scroll>
					{messages.length < 10 ? <UserChatProfile /> : null}
					{messages.map(message => (
						<MemoizedDirectChatMessage
							message={message}
							sender={chatMembers.find(member => member.id === message.userId)?.user as IUserWithProfile}
							parentMessageSender={
								message.parent?.userId
									? chatMembers.find(member => member.id === message.parent?.userId)?.user
									: undefined
							}
							key={message.id}
						/>
					))}
				</Scroll>
			</ul>
			<div className={styles.messages__input}>
				<DirectChatInput />
			</div>
		</section>
	);
};

export { ChatMessages };
