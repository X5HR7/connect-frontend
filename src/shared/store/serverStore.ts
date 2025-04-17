import { IFServer, IServerCategory, IServerMember, IServerRole } from '@shared/libs/interfaces/server.interface.ts';
import { create } from 'zustand/react';

interface ServerStore {
	serverId: string | null;
	roles: IServerRole[];
	serverCategories: IServerCategory[];
	serverMembers: IServerMember[];
	setServer: (server: IFServer) => void;
	clearServer: () => void;
}

export const useServerStore = create<ServerStore>(set => ({
	serverId: null,
	roles: [],
	serverCategories: [],
	serverMembers: [],
	setServer: (server: IFServer) => set({ ...server }),
	clearServer: () => set({ serverId: null, roles: [], serverCategories: [], serverMembers: [] })
}));
