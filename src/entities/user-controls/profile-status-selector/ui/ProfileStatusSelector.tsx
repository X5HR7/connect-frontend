'use client';

import { TProfileStatus } from '@shared/libs/interfaces/user.interface.ts';
import { ProfileStatusButton } from '@shared/ui/user/profile-status-button/ProfileStatusButton.tsx';
import { FC } from 'react';
import { useStatusUpdate } from '../lib/use-status-update.ts';
import styles from './ProfileStatusSelector.module.scss';

const ProfileStatusSelector: FC = () => {
	const { mutate: updateStatus, isPending } = useStatusUpdate();

	const handleButtonClick = (status: TProfileStatus) => {
		updateStatus(status);
	};

	return (
		<div className={styles.selector}>
			<ProfileStatusButton status={'ONLINE'} handleClick={handleButtonClick} isLoading={isPending} />
			<ProfileStatusButton status={'INACTIVE'} handleClick={handleButtonClick} isLoading={isPending} />
			<ProfileStatusButton
				status={'DO_NOT_DISTURB'}
				handleClick={handleButtonClick}
				description={'Вы не будете получать уведомления из приложения.'}
				isLoading={isPending}
			/>
			<ProfileStatusButton
				status={'OFFLINE'}
				handleClick={handleButtonClick}
				description={'Вы не будете отображаться в сети, но будете иметь полный доступ ко всем функциям приложения.'}
				isLoading={isPending}
			/>
		</div>
	);
};

export { ProfileStatusSelector };
