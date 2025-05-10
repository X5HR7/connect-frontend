'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useModalStore } from '@shared/store/modalStore.ts';
import styles from './EditPasswordButton.module.scss';

const EditPasswordModal = dynamic(() => import('../components/edit-password-modal'));

const EditPasswordButton: FC = () => {
	const openModal = useModalStore(state => state.openModal);

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
