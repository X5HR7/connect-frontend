import { FC } from 'react';
import { MessageControlButton } from '@shared/ui/chat';
import { DeleteIcon } from '@shared/ui/svg';
import { MessageButtonProps } from '../../../lib/button.inteface.ts';
import iconStyles from '../shared/Button.module.scss';
import buttonStyles from './DeleteButton.module.scss';

const DeleteButton: FC<MessageButtonProps> = ({ onClick, disabled }) => {
	return (
		<MessageControlButton
			text={'Удалить сообщение'}
			onClick={onClick}
			buttonClassName={buttonStyles.button}
			textClassName={buttonStyles.button__text}
			disabled={disabled}
		>
			<DeleteIcon className={iconStyles.icon} itemClassName={iconStyles.icon__item} />
		</MessageControlButton>
	);
};

export { DeleteButton };
