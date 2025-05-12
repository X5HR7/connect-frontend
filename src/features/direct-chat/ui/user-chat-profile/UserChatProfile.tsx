'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useChatStore } from '@entities/direct-chat/model/chatStore.ts';
import { useFriendUserStatus } from '@entities/friend/add-to-friend-button';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import styles from './UserChatProfile.module.scss';

const AddToFriendButton = dynamic(() => import('@entities/friend/add-to-friend-button'));
const DeleteFromFriendButton = dynamic(() => import('@entities/friend/delete-from-friend-button'));

const UserChatProfile: FC = () => {
	const receiver = useChatStore(state => state.receiver);
	const { status: friendStatus } = useFriendUserStatus(receiver?.user);

	return (
		<div className={styles.profile}>
			<Avatar profile={receiver?.user.profile} size={70} statusStyles={styles.profile__status} />
			<p className={styles.profile__name}>{receiver?.user.profile.displayName || receiver?.user.username}</p>
			{receiver?.user.profile.displayName ? (
				<p className={styles.profile__username}>{receiver?.user.username}</p>
			) : null}
			<p className={styles.profile__text}>Это начало истории ваших личных сообщений с {receiver?.user.username}.</p>
			<div className={styles.profile__buttons}>
				{friendStatus === 'friend' ? (
					<DeleteFromFriendButton receiver={receiver?.user} className={styles.profile__button} />
				) : (
					<AddToFriendButton receiver={receiver?.user} status={friendStatus} className={styles.profile__button} />
				)}
				<button className={`${styles.profile__button} ${styles.profile__button_ban}`} disabled={true}>
					Заблокировать
				</button>
			</div>
		</div>
	);
};

export { UserChatProfile };
