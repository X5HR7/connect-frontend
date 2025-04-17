import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';
import styles from './page.module.scss';

export const metadata: Metadata = {
	title: `${APP_NAME} | Сервер`
};

const ServerPage = () => {
	return (
		<div className={styles.page}>
			<div className={styles.page__text}>Для начала общения выберите любой доступный канал из списка.</div>
		</div>
	);
};

export default ServerPage;
