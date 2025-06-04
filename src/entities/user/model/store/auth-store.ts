import { create } from 'zustand';
import { IUserWithProfile } from '@shared/libs/interfaces';

interface AuthStore {
	user: IUserWithProfile | null;
	accessToken: string | null;
	setUser: (user: IUserWithProfile | null) => void;
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
