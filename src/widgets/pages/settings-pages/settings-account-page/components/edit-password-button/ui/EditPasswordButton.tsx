'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { modalService } from '@shared/services';
import styles from './EditPasswordButton.module.scss';

const EditPasswordModal = dynamic(() => import('../components/edit-password-modal').then(mod => mod.EditPasswordModal));

const EditPasswordButton: FC = () => {
	const handleButtonClick = () => {
		modalService.openDefaultModal(<EditPasswordModal />);
	};

	return (
		<button type={'button'} className={styles.button} onClick={handleButtonClick}>
			Изменить пароль
		</button>
	);
};

export { EditPasswordButton };
