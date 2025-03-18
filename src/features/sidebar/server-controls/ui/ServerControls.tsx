'use client';

import { IServerControlsProps } from '@features/sidebar/server-controls/lib/server-controls.interface.ts';
import categoryIcon from '@shared/assets/icons/hub.svg';
import inviteIcon from '@shared/assets/icons/invite.svg';
import settingsIcon from '@shared/assets/icons/settings.svg';
import chatIcon from '@shared/assets/icons/thread-chat.svg';
import { urls } from '@shared/libs/utils/url.config.ts';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './ServerControls.module.scss';

const ServerControls: FC<IServerControlsProps> = ({ isOpened, serverId, setIsOpened }) => {
	const handleSettingsButtonClick = () => {
		setIsOpened(false);
	};

	return (
		<div className={`${styles.controls} ${isOpened ? styles.controls_opened : ''}`}>
			<button className={`${styles.controls__button} ${styles.controls__button_invite}`}>
				<span>Пригласить людей</span>
				<Image src={inviteIcon} alt={'Invite'} className={styles['controls__button-image']} />
			</button>
			<Link
				href={urls.SERVER_SETTINGS(serverId)}
				className={`${styles.controls__button} ${styles.controls__button_link}`}
				onClick={handleSettingsButtonClick}
			>
				<span>Настройки сервера</span>
				<Image src={settingsIcon} alt={'Settings'} className={styles['controls__button-image']} />
			</Link>
			<button className={styles.controls__button}>
				<span>Создать категорию</span>
				<Image src={categoryIcon} alt={'Invite'} className={styles['controls__button-image']} />
			</button>
			<button className={styles.controls__button}>
				<span>Создать канал</span>
				<Image src={chatIcon} alt={'Invite'} className={styles['controls__button-image']} />
			</button>
		</div>
	);
};

export { ServerControls };
