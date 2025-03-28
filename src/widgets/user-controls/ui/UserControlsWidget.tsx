'use client';

import { MediaButton } from '@features/user-controls/media-button';
import { Profile } from '@features/user-controls/profile';
import settingsIcon from '@shared/assets/icons/settings.svg';
import { urls } from '@shared/libs/utils/url.config.ts';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import styles from './UserControlsWidget.module.scss';

const ProfileModal = dynamic(() => import('@features/user-controls/profile-modal'));

const UserControlsWidget: FC = () => {
	const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

	const toggleProfileModalState = () => {
		setIsProfileModalOpen(prev => !prev);
	};

	return (
		<div className={styles.controls}>
			<ProfileModal isOpen={isProfileModalOpen} />
			<Profile onClick={toggleProfileModalState} />
			<div className={styles.controls__buttons}>
				<MediaButton type={'micro'} />
				<MediaButton type={'voice'} />
				<Link href={urls.SETTINGS} className={styles['controls__button']}>
					<Image src={settingsIcon} alt={'settings'} className={styles['controls__button-icon']} />
				</Link>
			</div>
		</div>
	);
};

export { UserControlsWidget };
