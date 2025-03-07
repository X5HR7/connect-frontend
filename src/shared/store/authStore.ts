import { getNewRefreshToken } from '@shared/libs/api/api-client.ts';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { create } from 'zustand/react';

type TAuthStatus = 'auth' | 'not-auth' | 'loading';

interface AuthStore {
	user: IUserWithProfile | null;
	accessToken: string | null;
	status: TAuthStatus;
	setUser: (user: IUserWithProfile | null) => void;
	setAccessToken: (accessToken: string | null) => void;
	setStatus: (status: TAuthStatus) => void;
	clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>(set => ({
	user: null,
	accessToken: null,
	status: 'loading',
	setUser: user => set({ user }),
	setAccessToken: accessToken => set({ accessToken }),
	setStatus: status => set({ status }),
	clearAuth: () => set({ user: null, accessToken: null }),
	checkAuth: async () => {
		const data = await getNewRefreshToken();
		if (data) {
			set({ status: 'auth', user: data.user, accessToken: data.accessToken });
		} else {
			set({ status: 'not-auth', user: null, accessToken: null });
		}
	}
}));
