'use client';

import { FC } from 'react';
import { useCallStore, useChatStore } from '@entities/direct-chat';
import { useAuthStore } from '@entities/user';
import { EVENTS } from '@shared/libs/interfaces';
import { useSocketStore } from '@shared/store/socketStore.ts';
import { VoiceCallIcon } from '@shared/ui/svg';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import styles from './VoiceCallButton.module.scss';

const VoiceCallButton: FC = () => {
	const currentUser = useAuthStore(state => state.user);
	const receiver = useChatStore(state => state.receiver);
	const socket = useSocketStore(state => state.socket);
	const setCaller = useCallStore(state => state.setCaller);
	const setCallStatus = useCallStore(state => state.setCallStatus);

	const handleButtonClick = () => {
		if (socket && currentUser && receiver) {
			socket.emit(EVENTS.PRIVATE_CALL_INIT, { caller: currentUser, callee: receiver.user });
			setCaller(currentUser);
			setCallStatus('PENDING');
		}
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
