'use client';

import { FC, ReactNode, useCallback, useEffect } from 'react';
import { useCallStore } from '@entities/direct-chat';
import { useAuthStore } from '@entities/user';
import { EVENTS, IUserWithProfile } from '@shared/libs/interfaces';
import { useModalStore, useSocketStore } from '@shared/store';

interface CallProviderProps {
	children: ReactNode;
}

const CallProvider: FC<CallProviderProps> = ({ children }) => {
	const socket = useSocketStore(state => state.socket);
	const currentUser = useAuthStore(state => state.user);
	const setCallMembers = useCallStore(state => state.setCallMembers);
	const setCallStatus = useCallStore(state => state.setCallStatus);
	const clearCall = useCallStore(state => state.clearCall);
	const openModal = useModalStore(state => state.openModal);

	const handlePrivateCallInit = useCallback(
		(caller: IUserWithProfile) => {
			if (currentUser && caller) {
				setCallMembers({ caller, callee: currentUser });
				setCallStatus('RECEIVED');
				console.log(`Received CALL_INIT, currentUser ${currentUser.id} and caller ${caller.id}`);
			} else {
				console.log(`Received CALL_INIT, but no currentUser ${currentUser?.id} or caller ${caller?.id}`);
			}
		},
		[currentUser, setCallMembers, setCallStatus]
	);

	const handleCallEnd = () => {
		console.log('PRIVATE_CALL_END');
		clearCall();
	};

	const handleCallError = () => {
		openModal(
			<p style={{ maxWidth: 400, padding: 20 }}>
				Во время звонка произошла ошибка. Проверьте свое Интернет-соединение или попробуйте попытку позже. Также эта
				ошибка может быть вызвана тем, что собеседник не подключен к приложению.
			</p>
		);
		clearCall();
	};

	const handleCallAccept = useCallback(
		({ caller, callee }: { caller: IUserWithProfile; callee: IUserWithProfile }) => {
			if (caller && callee) {
				console.log('call accepted');
				setCallStatus('ACTIVE');
				setCallMembers({ caller, callee });
			}
		},
		[setCallMembers, setCallStatus]
	);

	useEffect(() => {
		if (socket && currentUser) {
			console.log('call socket on');
			socket.on(EVENTS.PRIVATE_CALL_RECEIVE, handlePrivateCallInit);
			socket.on(EVENTS.PRIVATE_CALL_ERROR, handleCallError);
			socket.on(EVENTS.PRIVATE_CALL_ENDED, handleCallEnd);
			socket.on(EVENTS.PRIVATE_CALL_REJECTED, handleCallEnd);
			socket.on(EVENTS.PRIVATE_CALL_ACCEPTED, handleCallAccept);
		}

		return () => {
			socket?.off(EVENTS.PRIVATE_CALL_RECEIVE, handlePrivateCallInit);
			socket?.off(EVENTS.PRIVATE_CALL_ERROR, handleCallError);
			socket?.off(EVENTS.PRIVATE_CALL_ENDED, handleCallEnd);
			socket?.off(EVENTS.PRIVATE_CALL_REJECTED, handleCallEnd);
			socket?.off(EVENTS.PRIVATE_CALL_ACCEPTED, handleCallAccept);
			clearCall();
		};
	}, [socket, currentUser]);

	return <>{children}</>;
};

export { CallProvider };
