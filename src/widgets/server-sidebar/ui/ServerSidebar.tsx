'use client';

import { ServerCategory } from '@features/sidebar/server-category';
import { ServerChannel } from '@features/sidebar/server-channel';
import closeIcon from '@shared/assets/icons/close.svg';
import openIcon from '@shared/assets/icons/open.svg';
import { useServerStore } from '@shared/store/serverStore.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import Image from 'next/image';
import { FC, useState } from 'react';
import styles from './ServerSidebar.module.scss';

const ServerSidebar: FC = () => {
	const { server } = useServerStore();

	const [isServerModalOpened, setIsServerModalOpened] = useState<boolean>(false);

	const toggleServerModalState = () => {
		setIsServerModalOpened(prev => !prev);
	};

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__header}>
				<button className={styles['sidebar__header-content']} onClick={toggleServerModalState}>
					<p className={styles['sidebar__header-content-name']}>{server?.name}</p>
					<Image
						src={isServerModalOpened ? closeIcon : openIcon}
						alt={'Toggle'}
						className={styles['sidebar__header-content-icon']}
					/>
				</button>
			</div>
			<ul className={styles.sidebar__channels}>
				<Scroll onLoadMore={() => {}} hasMore={false} loading={false} width={4}>
					{server?.serverCategories.map(category => (
						<li key={category.id}>
							<ServerCategory category={category}>
								<ul className={styles['sidebar__channels-list']}>
									{category.serverChannels?.map(channel => (
										<li key={channel.id}>
											<ServerChannel channel={channel} serverId={server?.id} />
										</li>
									))}
								</ul>
							</ServerCategory>
						</li>
					))}
				</Scroll>
			</ul>
		</div>
	);
};

export { ServerSidebar };
