'use client';

import { useChatStore } from '@shared/store/chatStore.ts';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import dynamic from 'next/dynamic';
import { FC, useEffect, useState } from 'react';
import styles from './UserChatProfile.module.scss';

const AddToFriendButton = dynamic(() => import('@shared/ui/user/add-to-friend-button/AddToFriendButton.tsx'));
const DeleteFromFriendButton = dynamic(
	() => import('@shared/ui/user/delete-from-friend-button/DeleteFromFriendButton.tsx')
);

const UserChatProfile: FC = () => {
	const { receiver } = useChatStore();
	const { friends, requests, removeFriend } = useFriendsStore();
	const [isFriend, setIsFriend] = useState<boolean>(false);
	const [isRequestSent, setIsRequestSent] = useState<boolean>(false);

	useEffect(() => {
		if ((friends.length !== 0 || requests.length !== 0) && receiver) {
			if (friends.filter(friend => friend.id === receiver?.memberId).length !== 0) {
				setIsFriend(true);
			}
			if (requests.filter(request => request.receiverId === receiver.memberId).length !== 0) {
				setIsRequestSent(true);
			}
		}
	}, [receiver, friends]);

	const handleAddFriendSuccess = () => {
		setIsRequestSent(true);
	};

	const handleDeleteFriendSuccess = (friendId: string) => {
		setIsFriend(false);
		removeFriend(friendId);
	};

	return (
		<div className={styles.profile}>
			<Avatar profile={receiver?.member.profile} size={70} statusStyles={styles.profile__status} />
			<p className={styles.profile__name}>{receiver?.member.profile.displayName || receiver?.member.username}</p>
			{receiver?.member.profile.displayName ? (
				<p className={styles.profile__username}>{receiver?.member.username}</p>
			) : null}
			<p className={styles.profile__text}>Это начало истории ваших личных сообщений с {receiver?.member.username}.</p>
			<div className={styles.profile__buttons}>
				{isFriend ? (
					<DeleteFromFriendButton
						receiver={receiver?.member}
						handleSuccess={handleDeleteFriendSuccess}
						className={styles.profile__button}
					/>
				) : (
					<AddToFriendButton
						receiver={receiver?.member}
						handleSuccess={handleAddFriendSuccess}
						isRequestSent={isRequestSent}
						className={styles.profile__button}
					/>
				)}
				<button className={`${styles.profile__button} ${styles.profile__button_ban}`} disabled={true}>
					Заблокировать
				</button>
			</div>
		</div>
	);
};

export { UserChatProfile };
