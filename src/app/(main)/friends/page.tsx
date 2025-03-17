'use client';

import { FriendList } from '@features/friends/friend-list';
import { TopPanel } from '@features/friends/top-panel';
import { TFriendsStatus } from '@shared/libs/interfaces/pages.inteface.ts';
import { useState } from 'react';
import styles from './page.module.scss';

const FriendsPage = () => {
	const [friendStatusFilter, setFriendStatusFilter] = useState<TFriendsStatus>('ALL');

	return (
		<div className={styles.page}>
			<div className={styles['page__top-panel']}>
				<TopPanel filter={friendStatusFilter} setFilter={setFriendStatusFilter} />
			</div>
			<div className={styles.page__friends}>
				<FriendList filter={friendStatusFilter} />
			</div>
		</div>
	);
};
export default FriendsPage;
