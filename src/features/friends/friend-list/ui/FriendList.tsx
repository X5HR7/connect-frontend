'use client';

import { FriendListItem } from '@entities/friends/friend-list-item';
import { IFriendList } from '@features/friends/friend-list/lib/friend-list.interface.ts';
import { useFriends } from '@features/friends/friend-list/lib/useFriends.ts';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { TFriendsStatus } from '@shared/libs/interfaces/pages.inteface.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { FC, useEffect, useState } from 'react';
import styles from './FriendList.module.scss';

const FriendList: FC<IFriendList> = ({ filter }) => {
	const { data: friendList, isPending } = useFriends();
	const [friends, setFriends] = useState<IUserWithProfile[]>([]);
	const [text, setText] = useState<string>('');

	const getFilteredFriendsByStatus = (list: IUserWithProfile[] | undefined, filter: TFriendsStatus) => {
		if (list) {
			if (filter === 'ONLINE') return list.filter(friend => friend.profile?.status === filter);
			return list;
		} else {
			return [];
		}
	};

	useEffect(() => {
		if (!isPending && friendList && friendList.length !== 0) {
			setFriends(getFilteredFriendsByStatus(friendList, filter));
		}
	}, [filter, friendList, isPending]);

	useEffect(() => {
		if (text) {
			setFriends(friends =>
				friends.filter(friend => friend.username.includes(text) || friend.profile?.displayName?.includes(text))
			);
		} else {
			setFriends(getFilteredFriendsByStatus(friendList, filter));
		}
	}, [text]);

	return (
		<div className={styles.friends}>
			<div className={styles.friends__search}>
				<input
					type={'text'}
					value={text}
					onChange={e => setText(e.target.value)}
					placeholder={'Введите сообщение'}
					className={styles['friends__search-element']}
					disabled={isPending}
				/>
			</div>
			<div className={styles.friends__scroll}>
				<Scroll onLoadMore={() => {}} hasMore={false} loading={isPending} width={8}>
					<div className={styles.friends__count}>Всего друзей - {friends?.length ? friends?.length : 0}</div>
					<ul className={styles.friends__list}>
						{friends.map(friend => (
							<FriendListItem friend={friend} key={friend.id} />
						))}
					</ul>
				</Scroll>
			</div>
		</div>
	);
};

export { FriendList };
