import { FC } from 'react';
import { VoiceCallIcon } from '@shared/ui/svg';
import styles from './AcceptCallButton.module.scss';

interface FinishCallButtonProps {
	onClick?: () => void;
}

const AcceptCallButton: FC<FinishCallButtonProps> = ({ onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			<VoiceCallIcon className={styles.button__icon} />
		</button>
	);
};

export { AcceptCallButton };
export default AcceptCallButton;
