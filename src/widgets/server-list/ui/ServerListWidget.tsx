'use client';

import { ServerItem } from '@entities/server-item';
import { Loader } from '@shared/ui/loader/Loader.tsx';
import { CreateServerButton } from '@shared/ui/server-list/create-server-button/CreateServerButton.tsx';
import { HomeLink } from '@shared/ui/server-list/home-link/HomeLink.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import { useServers } from '@widgets/server-list/lib/useServers.ts';
import { FC } from 'react';
import styles from './ServerListWidget.module.scss';

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
				<CreateServerButton onClick={() => {}} />
			</Tooltip>
		</div>
	);
};

export { ServerListWidget };
