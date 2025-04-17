import { IServerChannelProps } from '@features/sidebar/server-channel/lib/server-channel.interface.ts';
import settingsIcon from '@shared/assets/icons/settings.svg';
import { getChannelIcon } from '@shared/libs/utils/get-channel-icon.ts';
import { urls } from '@shared/libs/utils/url.config.ts';
import { NavLink } from '@shared/ui/nav-link/NavLink.tsx';
import Image from 'next/image';
import React, { FC } from 'react';
import styles from './ServerChannel.module.scss';

const ServerChannel: FC<IServerChannelProps> = ({ channel, serverId }) => {
	const handleSettingsClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		event.preventDefault();
		event.stopPropagation();
	};

	return (
		<NavLink
			href={urls.SERVER_CHANNEL(serverId, channel.categoryId, channel.id, channel.type)}
			className={styles.channel}
			activeClassName={styles.channel_active}
		>
			<div className={styles.channel__wrapper}>
				<Image src={getChannelIcon(channel.type)} alt='Channel icon' className={styles.channel__image} />
				<p className={styles.channel__name}>{channel.name}</p>
			</div>
			<Image src={settingsIcon} alt='Settings' className={styles.channel__settings} onClick={handleSettingsClick} />
		</NavLink>
	);
};

export { ServerChannel };
