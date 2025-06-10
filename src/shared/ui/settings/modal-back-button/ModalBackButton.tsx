'use client';

import { FC } from 'react';
import { modalService } from '@shared/services';
import styles from './ModalBackButton.module.scss';

const ModalBackButton: FC = () => {
	const handleCloseButtonClick = () => {
		modalService.close();
	};

	return (
		<button type={'button'} className={styles.button} onClick={handleCloseButtonClick}>
			Назад
		</button>
	);
};

export { ModalBackButton };
