'use client';

import { FC } from 'react';
import { useServerChatStore } from '@entities/server-chat';
import { PinnedMessages } from '../components/pinned-messages';
import { SearchForm } from '../components/search-form';
import styles from './ServerChatControls.module.scss';

const ServerChatControls: FC = () => {
	const channelName = useServerChatStore(state => state.serverChannel?.name);

	return (
		<div className={styles.controls}>
			<p className={styles.controls__channel}>{channelName}</p>
			<div className={styles.controls__elements}>
				<div className={styles['controls__elements-buttons']}>
					<PinnedMessages />
				</div>
				<search className={styles['controls__elements-search']}>
					<SearchForm />
				</search>
			</div>
		</div>
	);
};

export { ServerChatControls };
