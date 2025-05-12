import { FC } from 'react';
import { TProfileStatus } from '@shared/libs/interfaces/user.interface.ts';
import { getUserStatus } from '@shared/libs/utils/get-user-status.ts';
import { statusIcons } from '@shared/libs/utils/status-icons.ts';
import styles from './ProfileStatusButton.module.scss';

interface ProfileStatusButtonProps {
	status: TProfileStatus;
	handleClick: (status: TProfileStatus) => void;
	description?: string;
	isLoading: boolean;
}

const ProfileStatusButton: FC<ProfileStatusButtonProps> = ({ status, handleClick, description, isLoading }) => {
	const handleButtonClick = () => {
		handleClick(status);
	};

	const Icon = statusIcons[status || 'OFFLINE'];

	return (
		<button type={'button'} onClick={handleButtonClick} className={styles.button} disabled={isLoading}>
			<div className={styles.button__image}>
				<Icon className={styles.button__icon} />
			</div>
			<div className={styles.button__info}>
				<p className={styles['button__info-title']}>{getUserStatus(status)}</p>
				{description ? <p className={styles['button__info-description']}>{description}</p> : null}
			</div>
		</button>
	);
};

export { ProfileStatusButton };
