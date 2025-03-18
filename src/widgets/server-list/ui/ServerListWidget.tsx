'use client';

import { ServerItem } from '@entities/server-item';
import { Loader } from '@shared/ui/loader/Loader.tsx';
import { HomeLink } from '@shared/ui/server-list/home-link/HomeLink.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import { useServers } from '@widgets/server-list/lib/useServers.ts';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './ServerListWidget.module.scss';

const CreateServerButton = dynamic(() => import('@features/server-list/create-server-button'));

const ServerListWidget: FC = () => {
	const { data: servers, isPending } = useServers();

	return (
		<div className={styles.servers}>
			<nav className={styles.servers__nav}>
				<HomeLink />
				{isPending ? (
					<div className={styles['servers__nav-loader']}>
						<Loader />
					</div>
				) : (
					servers?.map(server => <ServerItem server={server} key={server.id} />)
				)}
			</nav>
			<Tooltip text={'Создать новый сервер'}>
				<CreateServerButton />
			</Tooltip>
		</div>
	);
};

export { ServerListWidget };
