'use client';

import dynamic from 'next/dynamic';
import { FC, useEffect } from 'react';
import { ServerItem } from '@entities/server';
import { Loader } from '@shared/ui/loader';
import { HomeLink } from '@shared/ui/server';
import { Tooltip } from '@shared/ui/tooltip';
import { useServers } from '../lib/useServers.ts';
import { useServersStore } from '../model/store/servers-store.ts';
import styles from './UserServers.module.scss';

const CreateServerButton = dynamic(() =>
	import('../components/create-server-button').then(mod => mod.CreateServerButton)
);

const UserServers: FC = () => {
	const servers = useServersStore(state => state.servers);
	const setServers = useServersStore(state => state.setServers);
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

export { UserServers };
