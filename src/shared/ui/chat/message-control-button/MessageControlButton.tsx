import { FC, ReactNode } from 'react';
import styles from './MessageControlButton.module.scss';

interface MessageControlButtonProps {
	children: ReactNode;
	text: string;
	onClick?: () => void;
	buttonClassName?: string;
	textClassName?: string;
	disabled?: boolean;
}

const MessageControlButton: FC<MessageControlButtonProps> = ({
	children,
	text,
	onClick,
	buttonClassName,
	textClassName,
	disabled = false
}) => {
	return (
		<button className={`${styles.button} ${buttonClassName || ''}`} onClick={onClick} disabled={disabled}>
			<p className={`${styles.button__text} ${textClassName || ''}`}>{text}</p>
			<div className={styles.button__image}>{children}</div>
		</button>
	);
};

export { MessageControlButton };
