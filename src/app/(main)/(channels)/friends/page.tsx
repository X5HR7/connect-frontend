import { FriendListWidget } from '@widgets/friends/friend-list-widget';
import { TopPanel } from '@widgets/friends/top-panel';
import styles from './page.module.scss';

const FriendsPage = () => {
	return (
		<div className={styles.page}>
			<section className={styles['page__top-panel']}>
				<TopPanel />
			</section>
			<section className={styles.page__friends}>
				<FriendListWidget />
			</section>
		</div>
	);
};
export default FriendsPage;
