import { FC } from 'react';
import { MessageControlButton } from '@shared/ui/chat/';
import { PinIcon } from '@shared/ui/svg';
import { MessagePinButtonProps } from '../../../lib/button.inteface.ts';
import styles from '../shared/Button.module.scss';

const PinButton: FC<MessagePinButtonProps> = ({ isPinned, onClick, disabled }) => {
	return (
		<MessageControlButton text={isPinned ? 'Открепить' : 'Закрепить'} onClick={onClick} disabled={disabled}>
			<PinIcon className={styles.icon} itemClassName={styles.icon__item} />
		</MessageControlButton>
	);
};

export { PinButton };
