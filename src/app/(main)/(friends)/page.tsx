import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';
import styles from './page.module.scss';

export const metadata: Metadata = {
	title: `${APP_NAME} | Друзья`
};

export default function Home() {
	return <div className={styles.page}>FRIENDS PAGE</div>;
}
