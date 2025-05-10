import { FC } from 'react';
import { ChatMessages } from '../components/messages';
import { PrivateChatControls } from '../components/private-chat-controls';
import styles from './ChatPage.module.scss';

const ChatPage: FC = () => {
	return (
		<div className={styles.page}>
			<section className={styles.page__panel}>
				<PrivateChatControls />
			</section>
			<section className={styles.page__chat}>
				<ChatMessages />
			</section>
		</div>
	);
};

export { ChatPage };
