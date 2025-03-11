'use client';

import { Profile } from '@features/user-controls/profile';
import microDisabledIcon from '@shared/assets/icons/micro_disabled.svg';
import microEnabledIcon from '@shared/assets/icons/micro_enabled.svg';
import settingsIcon from '@shared/assets/icons/settings.svg';
import voiceDisabledIcon from '@shared/assets/icons/vocie_disabled.svg';
import voiceEnabledIcon from '@shared/assets/icons/voice_enabled.svg';
import { useAuthStore } from '@shared/store/authStore.ts';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import styles from './UserControlsWidget.module.scss';

const UserControlsWidget: FC = () => {
	const { user } = useAuthStore();

	const [isMicroMuted, setIsMicroMuted] = useState<boolean>(false);
	const [isVoiceMuted, setIsVoiceMuted] = useState<boolean>(false);

	const toggleMicroState = () => {
		setIsMicroMuted(prev => !prev);
	};

	const toggleVoiceState = () => {
		setIsVoiceMuted(prev => !prev);
	};

	return (
		<div className={styles.controls}>
			{user ? <Profile user={user} /> : null}
			<div className={styles.controls__buttons}>
				<button className={styles['controls__buttons-micro']} onClick={toggleMicroState}>
					{isMicroMuted ? (
						<Image src={microDisabledIcon} alt={'Micro disabled'} className={styles['controls__buttons-icon']} />
					) : (
						<Image src={microEnabledIcon} alt={'Micro enabled'} className={styles['controls__buttons-icon']} />
					)}
				</button>
				<button className={styles['controls__buttons-voice']} onClick={toggleVoiceState}>
					{isVoiceMuted ? (
						<Image src={voiceDisabledIcon} alt={'Voice disabled'} className={styles['controls__buttons-icon']} />
					) : (
						<Image src={voiceEnabledIcon} alt={'Voice enabled'} className={styles['controls__buttons-icon']} />
					)}
				</button>
				<Link href={'/settings'} className={styles['controls__buttons-settings']}>
					<Image src={settingsIcon} alt={'settings'} className={styles['controls__buttons-icon']} />
				</Link>
			</div>
		</div>
	);
};

export { UserControlsWidget };
