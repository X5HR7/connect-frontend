'use client';

import { AuthResponse } from '@shared/libs/api/api-client.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { FC, ReactNode, useEffect } from 'react';

interface IAuthProviderProps {
	children: ReactNode;
	authData: AuthResponse | null;
}

export const AuthProvider: FC<IAuthProviderProps> = ({ children, authData }) => {
	const { setUser, setAccessToken } = useAuthStore();

	useEffect(() => {
		if (authData) {
			setUser(authData.user);
			setAccessToken(authData.accessToken);
		}
	}, [authData]);

	return <>{children}</>;
};
