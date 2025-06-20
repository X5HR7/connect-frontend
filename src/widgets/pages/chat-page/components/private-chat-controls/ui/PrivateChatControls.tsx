import dynamic from 'next/dynamic';
import { FC } from 'react';
import { UserProfile } from '../components/user-profile';
import styles from './PrivateChatControls.module.scss';

const VoiceCallButton = dynamic(() => import('../components/voice-call-button').then(mod => mod.VoiceCallButton));
const PinnedMessagesButton = dynamic(() =>
	import('../components/pinned-messages-button').then(mod => mod.PinnedMessagesButton)
);
const ChatSearchForm = dynamic(() => import('../components/chat-search-form').then(mod => mod.ChatSearchForm));

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
