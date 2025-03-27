'use client';

import { useAuthStore } from '@shared/store/authStore.ts';
import { useSocketStore } from '@shared/store/socketStore.ts';
import { FC, ReactNode, useEffect } from 'react';

interface ISocketProviderProps {
	children: ReactNode;
}

const SocketProvider: FC<ISocketProviderProps> = ({ children }) => {
	const { accessToken } = useAuthStore();
	const { connect, disconnect } = useSocketStore();

	useEffect(() => {
		if (accessToken) {
			connect(accessToken);
			console.log(accessToken);
		}
		return () => {
			disconnect();
		};
	}, [accessToken]);

	return <>{children}</>;
};

export { SocketProvider };
