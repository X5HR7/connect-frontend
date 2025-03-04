import { IUser } from '@shared/libs/interfaces';
import { create } from 'zustand/react';

interface AuthStore {
	user: IUser | null;
	accessToken: string | null;
	setUser: (user: IUser | null) => void;
	setAccessToken: (accessToken: string | null) => void;
	clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>(set => ({
	user: null,
	accessToken: null,
	setUser: user => set({ user }),
	setAccessToken: accessToken => set({ accessToken }),
	clearAuth: () => set({ user: null, accessToken: null })
}));
