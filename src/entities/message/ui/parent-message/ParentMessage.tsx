import Link from 'next/link';
import { FC } from 'react';
import { ParentMessageProps } from '../../lib/parent-message.inteface.ts';
import styles from './ParentMessage.module.scss';

const ParentMessage: FC<ParentMessageProps> = ({ message, sender }) => {
	return (
		<Link href={`#${message.id}`} className={styles.parent}>
			<p className={styles.parent__user}>
				@{sender?.profile.displayName || sender?.username || 'Пользователь не найден'}
			</p>
			<p className={styles.parent__message}>{message.content}</p>
		</Link>
	);
};

export { ParentMessage };
