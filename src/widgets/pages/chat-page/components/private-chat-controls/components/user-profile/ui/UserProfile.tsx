'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useChatStore } from '@entities/direct-chat';
import { modalService } from '@shared/services';
import { Tooltip } from '@shared/ui/tooltip';
import { Avatar } from '@shared/ui/user';
import styles from './UserProfile.module.scss';

const ModalUserProfile = dynamic(() => import('@features/modal-user-profile').then(mod => mod.ModalUserProfile));

const UserProfile: FC = () => {
	const receiver = useChatStore(state => state.receiver);

	const handleUsernameClick = () => {
		if (receiver) {
			modalService.openDefaultModal(<ModalUserProfile userId={receiver.user.id} />);
		}
	};

	return (
		<div className={styles.profile}>
			<div className={styles.profile__avatar}>
				<Avatar profile={receiver?.user.profile} size={30} statusStyles={styles['profile__avatar-status']} />
			</div>
			<Tooltip text={receiver?.user.username || ''} position={'bottom'}>
				<h2 className={styles.profile__username} onClick={handleUsernameClick}>
					{receiver?.user.profile.displayName || receiver?.user.username}
				</h2>
			</Tooltip>
		</div>
	);
};

export { UserProfile };
