import { MessageControlButton } from '@shared/ui/chat/message-control-button/MessageControlButton.tsx';
import { EditIcon } from '@shared/ui/svg/EditIcon.tsx';
import { FC } from 'react';
import { MessageEditButtonProps } from '../lib/message-edit-button.interface.ts';
import styles from './MessageEditButton.module.scss';

const MessageEditButton: FC<MessageEditButtonProps> = ({ messageId }) => {
	const handleButtonClick = () => {
		console.log('edit', messageId);
	};

	return (
		<MessageControlButton text={'Редактировать'} onClick={handleButtonClick}>
			<EditIcon className={styles.icon} itemClassName={styles.icon__item} />
		</MessageControlButton>
	);
};

export { MessageEditButton };
