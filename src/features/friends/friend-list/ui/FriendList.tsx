'use client';

import { IFriendList } from '@features/friends/friend-list/lib/friend-list.interface.ts';
import { useFriends } from '@features/friends/friend-list/lib/useFriends.ts';
import chatIcon from '@shared/assets/icons/chat.svg';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { TFriendsStatus } from '@shared/libs/interfaces/pages.inteface.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import Image from 'next/image';
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
							<li key={friend.id} className={styles.friend}>
								<div className={styles.friend__content}>
									<div className={styles.friend__info}>
										<Avatar profile={friend.profile} size={32} statusStyles={styles['friend__info-status']} />
										<p className={styles['friend__info-username']}>{friend.profile.displayName || friend.username}</p>
									</div>
									<div className={styles.friend__buttons}>
										<button className={styles['friend__buttons-button']}>
											<Tooltip text={'Сообщение'} position={'top'}>
												<Image src={chatIcon} alt='chat' className={styles['friend__buttons-button-icon']} />
											</Tooltip>
										</button>
										<button className={styles['friend__buttons-button']}>
											<Tooltip text={'Ещё'} position={'top'}>
												<p className={styles['friend__buttons-button_more']}>...</p>
											</Tooltip>
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</Scroll>
			</div>
		</div>
	);
};

export { FriendList };
