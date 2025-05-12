'use client';

import { FC, useEffect, useState } from 'react';
import { DisabledVoiceIcon, EnabledVoiceIcon } from '@shared/ui/svg';
import { MediaButton } from '../components/MediaButton.tsx';
import { getState, setState } from '../lib/local-storage.service.ts';
import iconStyles from './Icon.module.scss';

const VoiceMediaButton: FC = () => {
	const [isMuted, setIsMuted] = useState<boolean>(false);

	useEffect(() => {
		setIsMuted(getState('voice'));
	}, []);

	const handleButtonClick = () => {
		setIsMuted(prev => {
			setState('voice', !prev);
			return !prev;
		});
	};

	return (
		<MediaButton onClick={handleButtonClick}>
			{isMuted ? <DisabledVoiceIcon className={iconStyles.icon} /> : <EnabledVoiceIcon className={iconStyles.icon} />}
		</MediaButton>
	);
};

export { VoiceMediaButton };
export default VoiceMediaButton;
