'use client';

import microDisabledIcon from '@shared/assets/icons/micro_disabled.svg';
import microEnabledIcon from '@shared/assets/icons/micro_enabled.svg';
import voiceDisabledIcon from '@shared/assets/icons/voice_disabled.svg';
import voiceEnabledIcon from '@shared/assets/icons/voice_enabled.svg';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { getState, setState } from '../lib/local-storage.service.ts';
import { IMediaButtonProps } from '../lib/media-button.interface.ts';
import styles from './MediaButton.module.scss';

const MediaButton: FC<IMediaButtonProps> = ({ type }) => {
	const [isMuted, setIsMuted] = useState<boolean>(false);

	const enabledIcon = type === 'micro' ? microEnabledIcon : voiceEnabledIcon;
	const disabledIcon = type === 'micro' ? microDisabledIcon : voiceDisabledIcon;

	useEffect(() => {
		setIsMuted(getState(type));
	}, []);

	const handleButtonClick = () => {
		setIsMuted(prev => {
			setState(type, !prev);
			return !prev;
		});
	};

	return (
		<button className={styles.button} onClick={handleButtonClick}>
			<Image src={isMuted ? disabledIcon : enabledIcon} alt={'Media button'} className={styles.button__image} />
		</button>
	);
};

export { MediaButton };
