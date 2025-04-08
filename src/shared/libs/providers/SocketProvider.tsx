'use client';

import { EVENTS, IUserWithProfile } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useSocketStore } from '@shared/store/socketStore.ts';
import { FC, ReactNode, useEffect } from 'react';

interface ISocketProviderProps {
	children: ReactNode;
}

const SocketProvider: FC<ISocketProviderProps> = ({ children }) => {
	const { accessToken, setUser } = useAuthStore();
	const { connect, disconnect, socket } = useSocketStore();

	const handleUserUpdate = (user: IUserWithProfile) => {
		if (user) {
			console.log('WebSocket get user');
			setUser(user);
		}
	};

	useEffect(() => {
		if (accessToken) {
			connect(accessToken);
			console.log('WebSocket connected');
		}
	}, [accessToken]);

	useEffect(() => {
		if (socket) {
			socket.emit(EVENTS.CONNECTED);
			socket.on(EVENTS.CURRENT_USER_UPDATE, handleUserUpdate);
		}
	}, [socket]);

	useEffect(() => {
		return () => {
			disconnect();
		};
	}, []);

	return <>{children}</>;
};

export { SocketProvider };
