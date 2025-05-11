import { FC } from 'react';
import { getFormatedDate } from '@shared/libs/utils/get-formated-date.ts';
import { Markdown } from '@shared/ui/markdown/Markdown.tsx';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import { MessageLayoutProps } from '../../lib/message-layout.interface.ts';
import { ParentMessage } from '../index.ts';
import styles from './MessageLayout.module.scss';

const MessageLayout: FC<MessageLayoutProps> = ({
	sender,
	message,
	children,
	handleUsernameClick,
	showParentMessage = false,
	parentMessageSender
}) => {
	return (
		<li className={styles.message} id={message.id}>
			{showParentMessage && message.parent ? (
				<ParentMessage message={message.parent} sender={parentMessageSender} />
			) : null}
			<div className={styles.message__wrapper}>
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
				<div className={styles.message__controls}>{children}</div>
			</div>
		</li>
	);
};

export { MessageLayout };
