import { IServerItem } from '@entities/server-item/lib/server-item.interface.ts';
import { urls } from '@shared/libs/utils/url.config.ts';
import { NavLink } from '@shared/ui/nav-link/NavLink.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import Image from 'next/image';
import { FC } from 'react';
import styles from './ServerItem.module.scss';

const ServerItem: FC<IServerItem> = ({ server }) => {
	return (
		<div className={styles.item}>
			<Tooltip text={server.name}>
				<NavLink
					href={urls.SERVER(server.id)}
					className={styles.item__link}
					replace={false}
					exact={false}
					activeClassName={styles.item__link_active}
				>
					{server.image ? <Image src={server.image} alt={server.name} /> : 'Сервер'}
				</NavLink>
			</Tooltip>
		</div>
	);
};

export { ServerItem };
