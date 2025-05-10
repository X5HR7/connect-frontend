'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useModalStore } from '@shared/store/modalStore.ts';
import styles from './FindUserButton.module.scss';

const FindUserModal = dynamic(() => import('../components/find-user-modal'));

const FindUserButton: FC = () => {
	const openModal = useModalStore(state => state.openModal);

	const handleSidebarHeaderClick = () => {
		openModal(<FindUserModal />);
	};

	return (
		<button type={'button'} className={styles.button} onClick={handleSidebarHeaderClick}>
			Найти или начать беседу
		</button>
	);
};

export { FindUserButton };
