'use client';

import { FC, useEffect, useState } from 'react';
import { DisabledMicroIcon, EnabledMicroIcon } from '@shared/ui/svg';
import { MediaButton } from '@shared/ui/user';
import { getState, setState } from '../../lib/local-storage.service.ts';
import iconStyles from './Icon.module.scss';

const MicroMediaButton: FC = () => {
	const [isMuted, setIsMuted] = useState<boolean>(false);

	useEffect(() => {
		setIsMuted(getState('micro'));
	}, []);

	const handleButtonClick = () => {
		setIsMuted(prev => {
			setState('micro', !prev);
			return !prev;
		});
	};

	return (
		<MediaButton onClick={handleButtonClick}>
			{isMuted ? <DisabledMicroIcon className={iconStyles.icon} /> : <EnabledMicroIcon className={iconStyles.icon} />}
		</MediaButton>
	);
};

export { MicroMediaButton };
export default MicroMediaButton;
