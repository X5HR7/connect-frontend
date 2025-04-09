'use client';

import { useModalStore } from '@shared/store/modalStore.ts';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './FindUserButton.module.scss';

const FindUserModal = dynamic(() => import('@entities/friends/find-user-modal'));

const FindUserButton: FC = () => {
	const { openModal } = useModalStore();

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
