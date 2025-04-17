'use client';

import { getFormatedDate } from '@shared/libs/utils/get-formated-date.ts';
import { useModalStore } from '@shared/store/modalStore.ts';
import { Markdown } from '@shared/ui/markdown/Markdown.tsx';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import { IUserMessageProps } from '../lib/user-message.interface.ts';
import styles from './UserMessage.module.scss';

const ModalUserProfile = dynamic(() => import('@features/modal-user-profile'));

const UserMessage: FC<IUserMessageProps> = ({ message, sender }) => {
	const { openModal } = useModalStore();

	const handleUsernameClick = () => {
		if (sender) {
			openModal(<ModalUserProfile userId={sender.id} />);
		}
	};

	return (
		<li className={styles.message}>
			<div className={styles.message__avatar}>
				<Avatar profile={sender.profile} size={40} statusStyles={styles['message__avatar-status']} />
			</div>
			<div className={styles.message__content}>
				<div className={styles['message__content-title']}>
					<p className={styles['message__content-title-username']} onClick={handleUsernameClick}>
						{sender.profile.displayName || sender.username}
					</p>
					<p className={styles['message__content-title-date']}>{getFormatedDate(message.createdAt)}</p>
				</div>
				<div className={styles['message__content-text']}>
					<Markdown content={message.content} />
				</div>
			</div>
		</li>
	);
};

export { UserMessage };
