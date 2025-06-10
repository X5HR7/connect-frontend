'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { MicroMediaButton, VoiceMediaButton } from '@entities/user';
import settingsIcon from '@shared/assets/icons/settings.svg';
import { urls } from '@shared/libs/utils/url.config.ts';
import { Profile } from '../components/profile';
import styles from './UserControls.module.scss';

const ProfileModal = dynamic(() => import('../components/profile-modal').then(mod => mod.ProfileModal));

const UserControls: FC = () => {
	const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

	const toggleProfileModalState = () => {
		setIsProfileModalOpen(prev => !prev);
	};

	return (
		<div className={styles.controls}>
			<ProfileModal isOpen={isProfileModalOpen} />
			<Profile onClick={toggleProfileModalState} />
			<div className={styles.controls__buttons}>
				<MicroMediaButton />
				<VoiceMediaButton />
				<Link href={urls.SETTINGS_ACCOUNT} className={styles['controls__button']}>
					<Image src={settingsIcon} alt={'settings'} className={styles['controls__button-icon']} />
				</Link>
			</div>
		</div>
	);
};

export { UserControls };
