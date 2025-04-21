'use client';

import { ServerItem } from '@entities/server/server-item';
import { useServersStore } from '@shared/store/serversStore.ts';
import { Loader } from '@shared/ui/loader/Loader.tsx';
import { HomeLink } from '@shared/ui/server/home-link/HomeLink.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import dynamic from 'next/dynamic';
import { FC, useEffect } from 'react';
import { useServers } from '../lib/useServers.ts';
import styles from './ServerListWidget.module.scss';

const CreateServerButton = dynamic(() => import('@features/server/create-server-button'));

const ServerListWidget: FC = () => {
	const { servers, setServers } = useServersStore();
	const { data: serversData, isPending } = useServers();

	useEffect(() => {
		if (serversData && !isPending) {
			setServers(serversData);
		}
	}, [serversData, isPending]);

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
