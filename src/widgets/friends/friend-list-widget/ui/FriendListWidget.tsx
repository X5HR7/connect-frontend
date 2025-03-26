'use client';

import { useFriendsStore } from '@shared/store/friendsSore.ts';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './FriendListWidget.module.scss';

const FriendsList = dynamic(() => import('@features/friends/friends-list'));
const FriendsRequests = dynamic(() => import('@features/friends/friends-requests'));

const FriendListWidget: FC = () => {
	const { filter } = useFriendsStore();

	return <div className={styles.friends}>{filter === 'ADD' ? <FriendsRequests /> : <FriendsList />}</div>;
};

export { FriendListWidget };
