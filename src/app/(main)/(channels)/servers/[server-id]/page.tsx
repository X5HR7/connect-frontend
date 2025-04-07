import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';
import styles from './page.module.scss';

export const metadata: Metadata = {
	title: `${APP_NAME} | Сервер`
};

const ServerPage = () => {
	return (
		<div className={styles.page}>
			<div className={styles['page__top-panel']}>server top panel</div>
			<div className={styles.page__friends}>server chat</div>
		</div>
	);
};

export default ServerPage;
