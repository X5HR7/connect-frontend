'use client';

import { FC } from 'react';
import { DirectChatInput, MemoizedDirectChatMessage } from '@features/direct-chat';
import { useServerChatStore } from '@entities/server-chat';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import styles from './ChatMessages.module.scss';

const ChatMessages: FC = () => {
	const messages = useServerChatStore(state => state.messages);
	const chatMembers = useServerChatStore(state => state.chatMembers);

	return (
		<section className={styles.messages}>
			<ul className={styles.messages__list}>
				<Scroll>
					{messages.length === 0 ? <p className={styles.empty}>В этом чате еще нет ни одного сообщения.</p> : null}
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
