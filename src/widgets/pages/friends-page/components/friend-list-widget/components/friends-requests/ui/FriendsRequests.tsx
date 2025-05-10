'use client';

import { FC } from 'react';
import { FriendRequestItem } from '@entities/friends/friend-request-item';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { FriendRequestForm } from '../components/friend-request-form/';
import styles from './FriendsRequests.module.scss';

const FriendsRequests: FC = () => {
	const requests = useFriendsStore(state => state.requestsReceived);

	return (
		<div className={styles.requests}>
			<div className={styles.request}>
				<h1 className={styles.request__title}>Добавить в друзья</h1>
				<p className={styles.request__subtitle}>Вы можете добавить друзей по имени пользователя (username).</p>
				<FriendRequestForm />
			</div>
			<div className={styles.list}>
				<Scroll width={8}>
					<h2 className={styles.list__title}>Входящие запросы на добавление в друзья</h2>
					<ul className={styles.list__items}>
						{requests.map(request => (
							<FriendRequestItem key={request.id} request={request} />
						))}
					</ul>
					{requests.length > 0 ? null : (
						<p className={styles.list__empty}>На данный момент у вас нет входящих запросов на добавление в друзья.</p>
					)}
				</Scroll>
			</div>
		</div>
	);
};

export { FriendsRequests };
