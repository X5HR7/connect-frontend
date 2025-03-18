'use client';

import { useModalStore } from '@shared/store/modalStore.ts';
import { FC } from 'react';
import styles from './FindUserButton.module.scss';

const FindUserButton: FC = () => {
	const { openModal } = useModalStore();
	const handleSidebarHeaderClick = () => {
		openModal(<div>Найти</div>);
	};

	return (
		<button type={'button'} className={styles.button} onClick={handleSidebarHeaderClick}>
			Найти или начать беседу
		</button>
	);
};

export { FindUserButton };
