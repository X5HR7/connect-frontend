import Link from 'next/link';
import { FC } from 'react';
import { urls } from '@shared/libs/utils/url.config.ts';
import styles from './AppLink.module.scss';

const AppLink: FC = () => {
	return (
		<Link href={urls.FRIENDS} prefetch={true} className={styles.link}>
			Перейти в приложение
		</Link>
	);
};

export { AppLink };
