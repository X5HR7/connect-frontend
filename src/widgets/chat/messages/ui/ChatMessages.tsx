import { ChatInput } from '@features/chat/chat-input';
import { MessagesList } from '@features/chat/messages-list';
import { FC } from 'react';
import styles from './ChatMessages.module.scss';

const ChatMessages: FC = () => {
	return (
		<section className={styles.messages}>
			<ul className={styles.messages__list}>
				<MessagesList />
			</ul>
			<div className={styles.messages__input}>
				<ChatInput />
			</div>
		</section>
	);
};

export { ChatMessages };
