import { FC } from 'react';
import { ChatMessages } from '../components/messages';
import { ServerChatControls } from '../components/server-chat-controls';
import styles from './ServerTextChannelPage.module.scss';

const ServerTextChannelPage: FC = () => {
	return (
		<div className={styles.page}>
			<section className={styles.page__panel}>
				<ServerChatControls />
			</section>
			<section className={styles.page__chat}>
				<ChatMessages />
			</section>
		</div>
	);
};

export { ServerTextChannelPage };
