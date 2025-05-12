'use client';

import { FC, ReactNode, useCallback, useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { useAuthStore } from '@entities/user';
import { EVENTS, IUserWithProfile } from '@shared/libs/interfaces';
import { useSocketStore } from '@shared/store/socketStore.ts';

interface ISocketProviderProps {
	children: ReactNode;
}

const SocketProvider: FC<ISocketProviderProps> = ({ children }) => {
	const { accessToken, setUser } = useAuthStore(
		useShallow(state => ({ accessToken: state.accessToken, setUser: state.setUser }))
	);
	const { connect, disconnect, socket } = useSocketStore(
		useShallow(state => ({ connect: state.connect, disconnect: state.disconnect, socket: state.socket }))
	);

	const handleUserUpdate = useCallback(
		(user: IUserWithProfile) => {
			if (user) {
				console.log('WebSocket get user');
				setUser(user);
			}
		},
		[setUser]
	);

	useEffect(() => {
		if (!accessToken) return;

		const newSocket = connect(accessToken);
		newSocket.emit(EVENTS.CONNECTED);
		console.log('WebSocket connection initiated');

		return () => {
			if (newSocket) {
				console.log('Cleaning up socket connection');
				disconnect();
			}
		};
	}, [accessToken, connect, disconnect]);

	useEffect(() => {
		if (!socket) return;

		socket.on(EVENTS.CURRENT_USER_UPDATE, handleUserUpdate);

		return () => {
			socket.off(EVENTS.CURRENT_USER_UPDATE, handleUserUpdate);
		};
	}, [socket, handleUserUpdate]);

	return <>{children}</>;
};

export { SocketProvider };
