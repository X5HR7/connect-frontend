'use client';

import { ChangeEvent, FC, useEffect, useState } from 'react';
import { FriendListItem } from '@entities/friends/friend-list-item';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import styles from './FriendsList.module.scss';

const FriendsList: FC = () => {
	const friends = useFriendsStore(state => state.friends);
	const filter = useFriendsStore(state => state.filter);
	const [filteredFriends, setFilteredFriends] = useState<IUserWithProfile[]>([]);
	const [searchText, setSearchText] = useState<string>('');

	const getFilteredFriendsByStatus = (): IUserWithProfile[] => {
		if (filter === 'ONLINE') return friends.filter(friend => friend.profile.status !== 'OFFLINE');
		return friends;
	};

	useEffect(() => {
		if (searchText) {
			setFilteredFriends(
				getFilteredFriendsByStatus().filter(
					friend => friend.username.includes(searchText) || friend.profile?.displayName?.includes(searchText)
				)
			);
		} else {
			setFilteredFriends(getFilteredFriendsByStatus());
		}
	}, [searchText, friends, filter]);

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value);
	};

	return (
		<>
			<div className={styles.search}>
				<input
					type={'text'}
					value={searchText}
					onChange={handleSearchChange}
					placeholder={'Поиск'}
					className={styles.search__input}
				/>
			</div>
			<div className={styles.friends}>
				<Scroll width={8}>
					<div className={styles.friends__count}>
						Всего друзей - {filteredFriends?.length ? filteredFriends.length : 0}
					</div>
					<ul className={styles.friends__list}>
						{filteredFriends.map(friend => (
							<FriendListItem friend={friend} key={friend.id} />
						))}
					</ul>
				</Scroll>
			</div>
		</>
	);
};

export { FriendsList };
