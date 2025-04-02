'use client';

import { ModalUserProfile } from '@features/modal-user-profile';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useChatStore } from '@shared/store/chatStore.ts';
import { useModalStore } from '@shared/store/modalStore.ts';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import { FC } from 'react';
import styles from './UserProfile.module.scss';

const UserProfile: FC = () => {
	const { user } = useAuthStore();
	const { chatMembers } = useChatStore();
	const { openModal } = useModalStore();

	const receiver = chatMembers.filter(member => member.memberId !== user?.id)[0]?.member;

	const handleUsernameClick = () => {
		if (receiver) {
			openModal(<ModalUserProfile userId={receiver?.id} />);
		}
	};

	return (
		<div className={styles.profile}>
			<Avatar profile={receiver?.profile} size={30} statusStyles={styles.profile__avatar} />
			<Tooltip text={receiver?.username || ''} position={'bottom'}>
				<h2 className={styles.profile__username} onClick={handleUsernameClick}>
					{receiver?.profile.displayName || receiver?.username}
				</h2>
			</Tooltip>
		</div>
	);
};

export { UserProfile };
