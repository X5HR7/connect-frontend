'use client';

import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { FC } from 'react';
import styles from './ServerListWidget.module.scss';

const ServerListWidget: FC = () => {
	return (
		<div className={styles.servers}>
			<Scroll onLoadMore={() => {}} hasMore={false} loading={false}>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
			</Scroll>
		</div>
	);
};

export { ServerListWidget };
