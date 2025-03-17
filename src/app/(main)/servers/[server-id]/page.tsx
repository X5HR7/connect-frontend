import styles from './page.module.scss';

const ServerPage = () => {
	return (
		<div className={styles.page}>
			<div className={styles['page__top-panel']}>server top panel</div>
			<div className={styles.page__friends}>server chat</div>
		</div>
	);
};

export default ServerPage;
