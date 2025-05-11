import { FC } from 'react';
import { MessageControlButton } from '@shared/ui/chat/';
import { ReplyIcon } from '@shared/ui/svg';
import { MessageButtonProps } from '../../../lib/button.inteface.ts';
import styles from '../shared/Button.module.scss';

const AnswerButton: FC<MessageButtonProps> = ({ onClick, disabled = false }) => {
	return (
		<MessageControlButton text={'Ответить'} onClick={onClick} disabled={disabled}>
			<ReplyIcon className={styles.icon} itemClassName={styles.icon__item} />
		</MessageControlButton>
	);
};

export { AnswerButton };
