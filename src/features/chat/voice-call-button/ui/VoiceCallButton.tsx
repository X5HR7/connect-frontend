'use client';

import callIcon from '@shared/assets/icons/voice_call.svg';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import Image from 'next/image';
import { FC } from 'react';
import styles from './VoiceCallButton.module.scss';

const VoiceCallButton: FC = () => {
	const handleButtonClick = () => {};

	return (
		<button className={styles.button} onClick={handleButtonClick}>
			<Tooltip text={'Начать голосовой звонок'} position={'bottom'}>
				<Image src={callIcon} alt={'Call'} className={styles.button__image} />
			</Tooltip>
		</button>
	);
};

export { VoiceCallButton };
