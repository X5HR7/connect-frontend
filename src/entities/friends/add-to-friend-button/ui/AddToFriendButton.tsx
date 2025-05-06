'use client';

import inviteIcon from '@shared/assets/icons/invite.svg';
import { useFriendRequestAccept } from '@shared/libs/hooks/use-friend-request-accept.ts';
import { IUserFriendRequest, IUserWithProfile } from '@shared/libs/interfaces';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { Loader } from '@shared/ui/loader/Loader.tsx';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { useSendFriendRequest } from '../lib/use-send-friend-request.ts';
import styles from './AddToFriendButton.module.scss';

interface IAddToFriendButtonProps {
	receiver?: IUserWithProfile;
	className?: string;
	friendRequest?: IUserFriendRequest;
	status: 'requestSent' | 'requestReceived' | 'none';
}

const AddToFriendButton: FC<IAddToFriendButtonProps> = ({ receiver, className = '', status, friendRequest }) => {
	const { addFriend, addSentRequest } = useFriendsStore();
	const { mutate: sendFriendRequest, isPending: isSendRequestPending } = useSendFriendRequest();
	const { mutate: acceptFriendRequest, isPending: isAcceptRequestPending } = useFriendRequestAccept();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		if (isSendRequestPending || isAcceptRequestPending) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [isSendRequestPending, isAcceptRequestPending]);

	const handleButtonClick = () => {
		if (receiver?.username) {
			if (friendRequest?.id) {
				acceptFriendRequest(friendRequest.id, {
					onSuccess: friend => {
						if (friend?.id) {
							addFriend(friend);
						}
					}
				});
			} else {
				sendFriendRequest(
					{ username: receiver.username },
					{
						onSuccess: req => {
							if (req?.id) {
								addSentRequest(req);
							}
						}
					}
				);
			}
		}
	};

	return (
		<button
			type={'button'}
			className={`${styles.button} ${className}`}
			onClick={handleButtonClick}
			disabled={isLoading || status === 'requestSent'}
		>
			{isLoading && <Loader size={12} />}
			<Image src={inviteIcon} alt={'Invite'} className={`${styles.button__image} ${isLoading ? styles.loading : ''}`} />
			<span className={`${styles.button__text} ${isLoading ? styles.loading : ''}`}>
				{status === 'requestSent' ? 'Запрос уже отправлен' : 'Добавить в друзья'}
			</span>
		</button>
	);
};

export { AddToFriendButton };
