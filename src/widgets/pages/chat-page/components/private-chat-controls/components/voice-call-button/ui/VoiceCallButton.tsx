'use client';

import { FC } from 'react';
import { useModalStore } from '@shared/store/modalStore.ts';
import { VoiceCallIcon } from '@shared/ui/svg';
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
				<VoiceCallIcon className={styles.button__image} itemClassName={styles.button__icon} />
			</Tooltip>
		</button>
	);
};

export { VoiceCallButton };
