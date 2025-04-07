'use client';

import closeIcon from '@shared/assets/icons/close.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import styles from './GoBackButton.module.scss';

const GoBackButton: FC = () => {
	const router = useRouter();

	const handleButtonClick = () => {
		router.back();
	};

	return (
		<button type={'button'} className={styles.button} onClick={handleButtonClick}>
			<Image src={closeIcon} alt={'Close'} className={styles.button__image} />
			<p className={styles.button__text}>Закрыть</p>
		</button>
	);
};

export { GoBackButton };
