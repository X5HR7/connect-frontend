import { FC } from 'react';
import { CancelCallIcon } from '@shared/ui/svg';
import styles from './FinishCallButton.module.scss';

interface FinishCallButtonProps {
	onClick?: () => void;
}

const FinishCallButton: FC<FinishCallButtonProps> = ({ onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			<CancelCallIcon className={styles.button__icon} />
		</button>
	);
};

export { FinishCallButton };
