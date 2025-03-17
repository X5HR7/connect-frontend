import { IFServer } from '@shared/libs/interfaces/server.interface.ts';
import { create } from 'zustand/react';

interface ServerStore {
	server: IFServer | null;
	setServer: (server: IFServer | null) => void;
}

export const useServerStore = create<ServerStore>(set => ({
	server: null,
	setServer: (server: IFServer | null) => set({ server })
}));
