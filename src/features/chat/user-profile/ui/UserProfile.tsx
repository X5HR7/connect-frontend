'use client';

import { useChatStore } from '@shared/store/chatStore.ts';
import { useModalStore } from '@shared/store/modalStore.ts';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './UserProfile.module.scss';

const ModalUserProfile = dynamic(() => import('@features/modal-user-profile'));

const UserProfile: FC = () => {
	const { receiver } = useChatStore();
	const { openModal } = useModalStore();

	const handleUsernameClick = () => {
		if (receiver) {
			openModal(<ModalUserProfile userId={receiver.member.id} />);
		}
	};

	return (
		<div className={styles.profile}>
			<div className={styles.profile__avatar}>
				<Avatar profile={receiver?.member.profile} size={30} statusStyles={styles['profile__avatar-status']} />
			</div>
			<Tooltip text={receiver?.member.username || ''} position={'bottom'}>
				<h2 className={styles.profile__username} onClick={handleUsernameClick}>
					{receiver?.member.profile.displayName || receiver?.member.username}
				</h2>
			</Tooltip>
		</div>
	);
};

export { UserProfile };
