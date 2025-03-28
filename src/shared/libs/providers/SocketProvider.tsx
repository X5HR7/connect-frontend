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

	useEffect(() => {
		if (accessToken) {
			connect(accessToken);
		}
		return () => {
			disconnect();
		};
	}, [accessToken]);

	useEffect(() => {
		if (socket) {
			socket.on(EVENTS.CURRENT_USER_UPDATE, (user: IUserWithProfile) => {
				if (user) {
					setUser(user);
				}
			});
		}
	}, [socket]);

	return <>{children}</>;
};

export { SocketProvider };
