'use client';

import { UserMessage } from '@entities/chat/message';
import pinnedIcon from '@shared/assets/icons/pinned.svg';
import { IMessage } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useChatStore } from '@shared/store/chatStore.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import styles from './PinnedMessagesButton.module.scss';

const PinnedMessagesButton: FC = () => {
	const { user } = useAuthStore();
	const { messages, receiver } = useChatStore();
	const [filteredMessages, setFilteredMessages] = useState<IMessage[]>([]);
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
					<Image src={pinnedIcon} alt={'Pinned'} className={styles.button__image} />
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
								if (user && receiver) {
									return (
										<UserMessage
											key={message.id}
											message={message}
											sender={message.userId === receiver.id ? receiver?.member : user}
										/>
									);
								}
								return null;
							})}
						</Scroll>
					</ul>
				)}
			</div>
		</div>
	);
};

export { PinnedMessagesButton };
