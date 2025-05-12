'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useFriendsStore } from '@entities/friend';
import styles from './FriendListWidget.module.scss';

const FriendsList = dynamic(() => import('../components/friends-list'));
const FriendsRequests = dynamic(() => import('../components/friends-requests'));

const FriendListWidget: FC = () => {
	const filter = useFriendsStore(state => state.filter);

	return <div className={styles.friends}>{filter === 'ADD' ? <FriendsRequests /> : <FriendsList />}</div>;
};

export { FriendListWidget };
