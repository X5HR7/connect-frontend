'use client';

import Image from 'next/image';
import { FC } from 'react';
import { useShallow } from 'zustand/shallow';
import { useFriendsStore } from '@entities/friend';
import acceptIcon from '@shared/assets/icons/accept.svg';
import rejectIcon from '@shared/assets/icons/close.svg';
import { Tooltip } from '@shared/ui/tooltip';
import { Avatar } from '@shared/ui/user';
import { useFriendRequestAccept } from '../../../model/hooks/use-friend-request-accept.ts';
import { useRequestReject } from '../../../model/hooks/use-request-reject.ts';
import { IFriendRequestItemProps } from '../lib/friend-request-item.interface.ts';
import styles from './FriendRequestItem.module.scss';

const FriendRequestItem: FC<IFriendRequestItemProps> = ({ request }) => {
	const { removeReceivedRequest, addFriend } = useFriendsStore(
		useShallow(state => ({
			removeReceivedRequest: state.removeReceivedRequest,
			addFriend: state.addFriend
		}))
	);
	const { mutate: acceptRequest, isPending: isAcceptPending } = useFriendRequestAccept();
	const { mutate: rejectRequest, isPending: isRejectPending } = useRequestReject();

	const handleAcceptButtonClick = () => {
		acceptRequest(request.id, {
			onSuccess: friend => {
				if (friend.id) {
					removeReceivedRequest(request.id);
					addFriend(friend);
				}
			}
		});
	};

	const handleRejectButtonClick = () => {
		rejectRequest(request.id, {
			onSuccess: data => {
				if (data.id) {
					removeReceivedRequest(request.id);
				}
			}
		});
	};

	return (
		<li className={styles.request}>
			<div className={styles.request__content}>
				<div className={styles.request__info}>
					<div className={styles['request__info-avatar']}>
						<Avatar profile={request.sender.profile} size={32} statusStyles={styles['request__info-avatar-status']} />
					</div>
					<p className={styles['request__info-username']}>
						{request.sender.profile.displayName || request.sender.username}
					</p>
				</div>
				<div className={styles.request__buttons}>
					<Tooltip text={'Отклонить'} position={'top'}>
						<button
							className={styles['request__buttons-button']}
							onClick={handleRejectButtonClick}
							disabled={isRejectPending}
						>
							<Image src={rejectIcon} alt='Отклонить' className={styles['request__buttons-button-icon']} />
						</button>
					</Tooltip>
					<Tooltip text={'Принять'} position={'top'}>
						<button
							className={styles['request__buttons-button']}
							onClick={handleAcceptButtonClick}
							disabled={isAcceptPending}
						>
							<Image src={acceptIcon} alt='Принять' className={styles['request__buttons-button-icon']} />
						</button>
					</Tooltip>
				</div>
			</div>
		</li>
	);
};

export { FriendRequestItem };
