'use client';

import Image from 'next/image';
import { FC } from 'react';
import callIcon from '@shared/assets/icons/voice_call.svg';
import { useModalStore } from '@shared/store/modalStore.ts';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import styles from './VoiceCallButton.module.scss';

const VoiceCallButton: FC = () => {
	const openModal = useModalStore(state => state.openModal);

	const handleButtonClick = () => {
		openModal(
			<div className={styles.modal}>
				Ошибка подключения. Проверьте свое Интернет соединение или повторите попытку позже.
			</div>
		);
	};

	return (
		<button className={styles.button} onClick={handleButtonClick}>
			<Tooltip text={'Начать голосовой звонок'} position={'bottom'}>
				<Image src={callIcon} alt={'Call'} className={styles.button__image} />
			</Tooltip>
		</button>
	);
};

export { VoiceCallButton };
