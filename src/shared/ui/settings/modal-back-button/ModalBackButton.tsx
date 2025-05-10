'use client';

import { FC } from 'react';
import { useModalStore } from '@shared/store/modalStore.ts';
import styles from './ModalBackButton.module.scss';

const ModalBackButton: FC = () => {
	const closeModal = useModalStore(state => state.closeModal);

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
