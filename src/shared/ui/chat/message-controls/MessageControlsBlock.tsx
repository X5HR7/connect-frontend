import { FC, ReactNode } from 'react';
import { OptionsIcon } from '@shared/ui/svg/OptionsIcon.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import styles from './MessageControlsBlock.module.scss';

interface MessageControlsProps {
	onClick?: () => void;
	children?: ReactNode;
	isOpen?: boolean;
}

const MessageControlsBlock: FC<MessageControlsProps> = ({ onClick, children, isOpen = false }) => {
	return (
		<div className={styles.controls}>
			<button type={'button'} className={styles['controls__button']} onClick={onClick}>
				<Tooltip text={'Ещё'} position={'top'}>
					<OptionsIcon />
				</Tooltip>
			</button>
			<div className={`${styles['controls__buttons']} ${isOpen ? styles['controls__buttons_opened'] : ''}`}>
				{children}
			</div>
		</div>
	);
};

export { MessageControlsBlock };
