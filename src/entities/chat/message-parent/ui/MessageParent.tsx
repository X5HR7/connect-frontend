import closeIcon from '@shared/assets/icons/close.svg';
import { useChatStore } from '@shared/store/chatStore.ts';
import Image from 'next/image';
import { FC } from 'react';
import { MessageParentProps } from '../lib/message-parent.interface.ts';
import styles from './MessageParent.module.scss';

const MessageParent: FC<MessageParentProps> = ({ parentMessage, hiddenCloseButton = true }) => {
	const { chatMembers, setParentMessage } = useChatStore();

	const handleCloseButtonClick = () => {
		setParentMessage(null);
	};

	return (
		<div className={`${styles.parent} ${hiddenCloseButton ? styles.parent_transparent : ''}`}>
			<p className={styles.parent__user}>
				@{chatMembers.find(member => member.id === parentMessage?.userId)?.user.username || 'Пользователь не найден'}
			</p>
			<p className={styles.parent__message}>{parentMessage?.content?.slice(0, 80)}</p>
			<button
				type={'button'}
				className={`${styles.parent__button} ${hiddenCloseButton ? styles.parent__button_hidden : ''}`}
				onClick={handleCloseButtonClick}
			>
				<Image src={closeIcon} alt={'close'} className={styles.parent__icon} />
			</button>
		</div>
	);
};

export { MessageParent };
