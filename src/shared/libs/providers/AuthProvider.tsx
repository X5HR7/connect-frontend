'use client';

import { useAuthStore } from '@shared/store/authStore.ts';
import { FC, ReactNode, useEffect } from 'react';

interface IAuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
	const { setAccessToken } = useAuthStore();

	useEffect(() => {
		const cookieString = document.cookie;
		const cookieArray = cookieString.split('; ');
		const tokenCookie = cookieArray.find(row => row.startsWith('access_token='));

		if (tokenCookie) {
			const token = tokenCookie.split('=')[1];
			setAccessToken(token);
		}
	}, []);

	return <>{children}</>;
};
