'use client';

import { useModalStore } from '@shared/store/modalStore.ts';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './EditPasswordButton.module.scss';

const EditPasswordModal = dynamic(() => import('@entities/settings/edit-password-modal'));

const EditPasswordButton: FC = () => {
	const { openModal } = useModalStore();

	const handleButtonClick = () => {
		openModal(<EditPasswordModal />);
	};

	return (
		<button type={'button'} className={styles.button} onClick={handleButtonClick}>
			Изменить пароль
		</button>
	);
};

export { EditPasswordButton };
