'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, useState } from 'react';
import closeIcon from '@shared/assets/icons/close.svg';
import openIcon from '@shared/assets/icons/open.svg';
import { useServerStore } from '@shared/store/serverStore.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { ServerCategory } from '../components/server-category';
import { ServerChannel } from '../components/server-channel';
import styles from './ServerSidebar.module.scss';

const ServerControls = dynamic(() => import('../components/server-controls'));

const ServerSidebar: FC = () => {
	const server = useServerStore(state => state.server);
	const serverCategories = useServerStore(state => state.serverCategories);

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
				{server?.id ? (
					<ServerControls isOpened={isServerModalOpened} serverId={server?.id} setIsOpened={setIsServerModalOpened} />
				) : null}
			</div>
			<ul className={styles.sidebar__channels}>
				<Scroll width={4}>
					{serverCategories.map(category => (
						<li key={category.id}>
							<ServerCategory category={category}>
								<ul className={styles['sidebar__channels-list']}>
									{category.serverChannels?.map(channel => (
										<li key={channel.id}>
											<ServerChannel channel={channel} serverId={category.serverId} />
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
