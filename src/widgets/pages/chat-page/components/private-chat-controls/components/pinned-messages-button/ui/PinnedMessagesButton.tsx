'use client';

import { FC, useEffect, useState } from 'react';
import { useChatStore } from '@entities/chat';
import { MessageLayout } from '@entities/message';
import { useAuthStore } from '@entities/user';
import { IMessage } from '@shared/libs/interfaces';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { PinIcon } from '@shared/ui/svg';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import styles from './PinnedMessagesButton.module.scss';

const PinnedMessagesButton: FC = () => {
	const user = useAuthStore(state => state.user);
	const messages = useChatStore(state => state.messages);
	const receiver = useChatStore(state => state.receiver);
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
								if (user && receiver) {
									return (
										<MessageLayout
											key={message.id}
											message={message}
											sender={message.userId === receiver.id ? receiver?.user : user}
											showParentMessage={false}
											handleUsernameClick={() => {}}
										/>
									);
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

export { PinnedMessagesButton };
