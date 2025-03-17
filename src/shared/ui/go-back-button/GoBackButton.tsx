'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import styles from './GoBackButton.module.scss';

const GoBackButton: FC = () => {
	const router = useRouter();

	const handleButtonClick = () => {
		router.back();
	};

	return (
		<button className={styles.button} onClick={handleButtonClick}>
			Вернуться назад.
		</button>
	);
};

export { GoBackButton };
