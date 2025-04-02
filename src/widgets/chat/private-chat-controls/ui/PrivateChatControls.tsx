import { UserProfile } from '@features/chat/user-profile';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './PrivateChatControls.module.scss';

const VoiceCallButton = dynamic(() => import('@features/chat/voice-call-button'));
const PinnedMessagesButton = dynamic(() => import('@features/chat/pinned-messages-button'));
const ChatSearchForm = dynamic(() => import('@features/chat/chat-search-form'));

const PrivateChatControls: FC = () => {
	return (
		<section className={styles.controls}>
			<div className={styles.controls__profile}>
				<UserProfile />
			</div>
			<div className={styles.controls__elements}>
				<div className={styles['controls__elements-buttons']}>
					<VoiceCallButton />
					<PinnedMessagesButton />
				</div>
				<search className={styles['controls__elements-search']}>
					<ChatSearchForm />
				</search>
			</div>
		</section>
	);
};

export { PrivateChatControls };
