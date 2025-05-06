'use client';

import { useFriendUserStatus } from '@entities/friends/add-to-friend-button';
import { useChatStore } from '@shared/store/chatStore.ts';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './UserChatProfile.module.scss';

const AddToFriendButton = dynamic(() => import('@entities/friends/add-to-friend-button/'));
const DeleteFromFriendButton = dynamic(() => import('@entities/friends/delete-from-friend-button'));

const UserChatProfile: FC = () => {
	const { receiver } = useChatStore();
	const { status: friendStatus } = useFriendUserStatus(receiver?.user);
	// const { friends, requestsReceived, requestsSent } = useFriendsStore();
	// const [friendStatus, setFriendStatus] = useState<'friend' | 'requestSent' | 'requestReceived' | 'none'>('none');
	//
	// useEffect(() => {
	// 	if (receiver) {
	// 		if (friends.find(user => user.id === receiver.memberId)) {
	// 			setFriendStatus('friend');
	// 		} else if (requestsReceived.find(req => req.senderId === receiver.memberId)) {
	// 			setFriendStatus('requestReceived');
	// 		} else if (requestsSent.find(req => req.receiverId === receiver.memberId)) {
	// 			setFriendStatus('requestSent');
	// 		} else {
	// 			setFriendStatus('none');
	// 		}
	// 	} else {
	// 		setFriendStatus('none');
	// 	}
	// }, [receiver, friends, requestsReceived, requestsSent]);

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
