'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { CloseIcon } from '@shared/ui/svg';
import styles from './GoBackButton.module.scss';

const GoBackButton: FC = () => {
	const router = useRouter();

	const handleButtonClick = () => {
		router.back();
	};

	return (
		<button type={'button'} className={styles.button} onClick={handleButtonClick}>
			<CloseIcon className={styles.button__image} itemClassName={styles.button__icon} />
			<p className={styles.button__text}>Закрыть</p>
		</button>
	);
};

export { GoBackButton };
