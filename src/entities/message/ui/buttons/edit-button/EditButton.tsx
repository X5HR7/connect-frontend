import { FC } from 'react';
import { MessageButtonProps } from '@entities/message/lib/button.inteface.ts';
import { MessageControlButton } from '@shared/ui/chat';
import { EditIcon } from '@shared/ui/svg';
import styles from '../shared/Button.module.scss';

const EditButton: FC<MessageButtonProps> = ({ onClick, disabled }) => {
	return (
		<MessageControlButton text={'Редактировать'} onClick={onClick} disabled={disabled}>
			<EditIcon className={styles.icon} itemClassName={styles.icon__item} />
		</MessageControlButton>
	);
};

export { EditButton };
