'use client';

import { getFormatedDate } from '@shared/libs/utils/get-formated-date.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useModalStore } from '@shared/store/modalStore.ts';
import { Markdown } from '@shared/ui/markdown/Markdown.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { IUserMessageProps } from '../lib/user-message.interface.ts';
import styles from './UserMessage.module.scss';

const ModalUserProfile = dynamic(() => import('@features/modal-user-profile'));
const MessageAnswerButton = dynamic(() => import('@entities/chat/message-answer-button'));
const MessageEditButton = dynamic(() => import('@entities/chat/message-edit-button'));
const MessagePinButton = dynamic(() => import('@entities/chat/message-pin-button'));
const MessageDeleteButton = dynamic(() => import('@entities/chat/message-delete-button'));

const UserMessage: FC<IUserMessageProps> = ({ message, sender, showControls = false }) => {
	const [isMessageControlsOpened, setIsMessageControlsOpened] = useState<boolean>(false);
	const { user } = useAuthStore();
	const { openModal } = useModalStore();

	const handleControlsButtonClick = () => {
		setIsMessageControlsOpened(prev => !prev);
	};

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
			{showControls ? (
				<div className={styles.message__controls}>
					<button type={'button'} className={styles['message__controls-button']} onClick={handleControlsButtonClick}>
						<Tooltip text={'Ещё'} position={'top'}>
							<svg
								width='15'
								height='6'
								viewBox='0 0 24 6'
								xmlns='http://www.w3.org/2000/svg'
								className={styles['message__controls-button-icon']}
							>
								<circle cx='3' cy='3' r='3' fill='currentColor' />
								<circle cx='12' cy='3' r='3' fill='currentColor' />
								<circle cx='21' cy='3' r='3' fill='currentColor' />
							</svg>
						</Tooltip>
					</button>
					<div
						className={`${styles['message__controls-buttons']} ${isMessageControlsOpened ? styles['message__controls-buttons_opened'] : ''}`}
					>
						<MessageAnswerButton messageId={message.id} />
						{user?.id === sender.id ? <MessageEditButton messageId={message.id} /> : null}
						<MessagePinButton messageId={message.id} isPinned={message.isPinned} />
						{user?.id === sender.id ? <MessageDeleteButton messageId={message.id} /> : null}
					</div>
				</div>
			) : null}
		</li>
	);
};

export { UserMessage };
