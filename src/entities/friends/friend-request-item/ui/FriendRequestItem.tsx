'use client';

import acceptIcon from '@shared/assets/icons/accept.svg';
import rejectIcon from '@shared/assets/icons/close.svg';
import { useFriendRequestAccept } from '@shared/libs/hooks/use-friend-request-accept.ts';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import Image from 'next/image';
import { FC } from 'react';
import { IFriendRequestItemProps } from '../lib/friend-request-item.interface.ts';
import { useRequestReject } from '../lib/use-request-reject.ts';
import styles from './FriendRequestItem.module.scss';

const FriendRequestItem: FC<IFriendRequestItemProps> = ({ request }) => {
	const { removeRequest, addFriend } = useFriendsStore();
	const { mutate: acceptRequest, isPending: isAcceptPending } = useFriendRequestAccept();
	const { mutate: rejectRequest, isPending: isRejectPending } = useRequestReject();

	const handleAcceptButtonClick = () => {
		acceptRequest(request.id, {
			onSuccess: friend => {
				if (friend.id) {
					removeRequest(request.id);
					addFriend(friend);
				}
			}
		});
	};

	const handleRejectButtonClick = () => {
		rejectRequest(request.id, {
			onSuccess: data => {
				if (data.id) {
					removeRequest(request.id);
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
