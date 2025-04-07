'use client';

import { useModalStore } from '@shared/store/modalStore.ts';
import { FC } from 'react';
import styles from './ModalBackButton.module.scss';

const ModalBackButton: FC = () => {
	const { closeModal } = useModalStore();

	const handleCloseButtonClick = () => {
		closeModal();
	};

	return (
		<button type={'button'} className={styles.button} onClick={handleCloseButtonClick}>
			Назад
		</button>
	);
};

export { ModalBackButton };
