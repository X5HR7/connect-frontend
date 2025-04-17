'use client';

import { EVENTS, IMessage } from '@shared/libs/interfaces';
import { useChatStore } from '@shared/store/chatStore.ts';
import { useSocketStore } from '@shared/store/socketStore.ts';
import { MessageControlButton } from '@shared/ui/chat/message-control-button/MessageControlButton.tsx';
import { DeleteIcon } from '@shared/ui/svg/DeleteIcon.tsx';
import { FC, useState } from 'react';
import { MessageDeleteButtonProps } from '../lib/message-delete-button.interface.ts';
import styles from './MessageDeleteButton.module.scss';

const MessageDeleteButton: FC<MessageDeleteButtonProps> = ({ messageId }) => {
	const [isPending, setIsPending] = useState<boolean>(false);
	const { socket } = useSocketStore();
	const { deleteMessage } = useChatStore();

	const handleDeleteMessage = (message: IMessage) => {
		deleteMessage(message);
	};

	const handleButtonClick = async () => {
		if (!socket) return;
		try {
			setIsPending(true);

			const response = await socket.emitWithAck(EVENTS.MESSAGE_DELETE, messageId);
			if (response.status === 'success') {
				handleDeleteMessage(response.data);
			} else {
				console.warn('Ошибка:', response.error);
			}
		} catch (error) {
			console.warn('Socket error:', error);
		} finally {
			setIsPending(false);
		}
	};

	return (
		<MessageControlButton
			text={'Удалить сообщение'}
			onClick={handleButtonClick}
			buttonClassName={styles.button}
			textClassName={styles.button__text}
			disabled={isPending}
		>
			<DeleteIcon className={styles.icon} itemClassName={styles.icon__item} />
		</MessageControlButton>
	);
};

export { MessageDeleteButton };
