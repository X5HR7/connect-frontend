'use client';

import { useChatStore } from '@shared/store/chatStore.ts';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import { FC, useEffect, useState } from 'react';
import { useDeleteFriend } from '../lib/useDeleteFriend.ts';
import { useSendFriendRequest } from '../lib/useSendFriendRequest.ts';
import styles from './UserChatProfile.module.scss';

const UserChatProfile: FC = () => {
	const { receiver } = useChatStore();
	const { friends, requests, removeFriend } = useFriendsStore();
	const [isFriend, setIsFriend] = useState<boolean>(false);
	const [isRequestSent, setIsRequestSent] = useState<boolean>(false);
	const { mutate: addToFriend, isPending: isAddToFriendPending } = useSendFriendRequest();
	const { mutate: deleteFriend, isPending: isDeleteFriendPending } = useDeleteFriend();

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

	const addToFriendButtonClick = () => {
		if (receiver?.member.username) {
			addToFriend(
				{ username: receiver.member.username },
				{
					onSuccess: () => {
						setIsRequestSent(true);
					}
				}
			);
		}
	};

	const deleteFromFriendButtonClick = () => {
		if (receiver?.memberId) {
			deleteFriend(receiver.memberId, {
				onSuccess: data => {
					if (data?.friendId) {
						setIsFriend(false);
						removeFriend(data.friendId);
					}
				}
			});
		}
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
				{isFriend && (
					<button
						className={`${styles.profile__button} ${styles.profile__button_delete}`}
						disabled={!receiver || isDeleteFriendPending}
						onClick={deleteFromFriendButtonClick}
					>
						Удалить из друзей
					</button>
				)}

				{!isFriend && (
					<button
						className={styles.profile__button}
						disabled={!receiver || isRequestSent || isAddToFriendPending}
						onClick={addToFriendButtonClick}
					>
						{isRequestSent ? 'Запрос уже отправлен' : 'Добавить в друзья'}
					</button>
				)}

				<button className={`${styles.profile__button} ${styles.profile__button_ban}`} disabled={true}>
					Заблокировать
				</button>
			</div>
		</div>
	);
};

export { UserChatProfile };
