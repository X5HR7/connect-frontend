import { FriendsProvider } from '@shared/libs/providers/FriendsProvider.tsx';
import { FriendListWidget } from '@widgets/friends/friend-list-widget';
import { TopPanel } from '@widgets/friends/top-panel';
import styles from './page.module.scss';

const FriendsPage = () => {
	return (
		<div className={styles.page}>
			<FriendsProvider>
				<div className={styles['page__top-panel']}>
					<TopPanel />
				</div>
				<div className={styles.page__friends}>
					<FriendListWidget />
				</div>
			</FriendsProvider>
		</div>
	);
};
export default FriendsPage;
