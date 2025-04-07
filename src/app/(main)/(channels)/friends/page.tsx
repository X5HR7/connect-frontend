import { FriendListWidget } from '@widgets/friends/friend-list-widget';
import { TopPanel } from '@widgets/friends/top-panel';
import styles from './page.module.scss';

const FriendsPage = () => {
	return (
		<div className={styles.page}>
			<div className={styles['page__top-panel']}>
				<TopPanel />
			</div>
			<div className={styles.page__friends}>
				<FriendListWidget />
			</div>
		</div>
	);
};
export default FriendsPage;
