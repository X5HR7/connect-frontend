'use client';

import { FC, useEffect, useState } from 'react';
import { MessageLayout } from '@entities/message';
import { useServerChatStore } from '@entities/server-chat';
import { useAuthStore } from '@entities/user';
import { IServerMessage } from '@shared/libs/interfaces';
import { useServerStore } from '@shared/store/serverStore.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { PinIcon } from '@shared/ui/svg';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import styles from './PinnedMessages.module.scss';

const PinnedMessages: FC = () => {
	const user = useAuthStore(state => state.user);
	const messages = useServerChatStore(state => state.messages);
	const chatMembers = useServerStore(state => state.serverMembers);
	const [filteredMessages, setFilteredMessages] = useState<IServerMessage[]>([]);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	useEffect(() => {
		if (messages.length) {
			setFilteredMessages(messages.filter(message => message.isPinned));
		} else {
			setFilteredMessages([]);
		}
	}, [messages]);

	const handleButtonClick = () => {
		setIsModalOpen(prev => !prev);
	};

	return (
		<div className={styles.wrapper}>
			<button className={styles.button} onClick={handleButtonClick}>
				<Tooltip text={'Запрепленные сообщения'} position={'bottom'}>
					<PinIcon className={styles.button__image} itemClassName={styles.button__icon} />
				</Tooltip>
			</button>
			<div className={`${styles.modal} ${isModalOpen ? '' : styles.modal_hidden}`}>
				<h2 className={styles.modal__title}>Закреплённые сообщения</h2>
				{filteredMessages.length === 0 ? (
					<p className={styles.modal__placeholder}>В этом чате нет закрепленных сообщений.</p>
				) : (
					<ul className={styles.modal__messages}>
						<Scroll>
							{filteredMessages.map(message => {
								if (user) {
									const sender = chatMembers.find(member => member.user.id === user.id);
									if (sender) {
										return (
											<MessageLayout
												key={message.id}
												message={message}
												sender={sender.user}
												showParentMessage={false}
												handleUsernameClick={() => {}}
											/>
										);
									}
								}
								return null;
							})}
							<></>
						</Scroll>
					</ul>
				)}
			</div>
		</div>
	);
};

export { PinnedMessages };
