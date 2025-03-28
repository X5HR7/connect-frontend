'use client';

import { useAuthStore } from '@shared/store/authStore.ts';
import { FC, ReactNode, useEffect } from 'react';

interface IAuthProviderProps {
	children: ReactNode;
	accessToken: string | undefined;
}

export const AuthProvider: FC<IAuthProviderProps> = ({ children, accessToken }) => {
	const { setAccessToken } = useAuthStore();

	useEffect(() => {
		if (accessToken) {
			setAccessToken(accessToken);
		}
	}, [accessToken]);

	return <>{children}</>;
};
