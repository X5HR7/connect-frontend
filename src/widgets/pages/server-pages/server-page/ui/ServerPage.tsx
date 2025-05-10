import { ServerMembers } from '@pages/server-pages/shared/server-members';
import styles from './ServerPage.module.scss';

const ServerPage = () => {
	return (
		<>
			<section className={styles.top_panel}>Сервер | Главная страница</section>
			<section className={styles.content}>
				<div className={styles.main}>
					<div className={styles.page}>
						<div className={styles.page__text}>Для начала общения выберите любой доступный канал из списка.</div>
					</div>
				</div>
				<aside className={styles.members}>
					<ServerMembers />
				</aside>
			</section>
		</>
	);
};

export { ServerPage };
