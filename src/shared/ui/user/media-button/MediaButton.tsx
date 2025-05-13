import { FC, ReactNode } from 'react';
import styles from './MediaButton.module.scss';

interface MediaButtonProps {
	children?: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
}

const MediaButton: FC<MediaButtonProps> = ({ children, onClick, disabled }) => {
	return (
		<button className={styles.button} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};

export { MediaButton };
