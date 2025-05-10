import { FC } from 'react';
import { FriendListWidget } from '../components/friend-list-widget';
import { TopPanel } from '../components/top-panel';
import styles from './FriendsPage.module.scss';

const FriendsPage: FC = () => {
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

export { FriendsPage };
