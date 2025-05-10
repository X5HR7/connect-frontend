import { create } from 'zustand';
import {
	IFServer,
	IServer,
	IServerCategory,
	IServerMember,
	IServerRole
} from '@shared/libs/interfaces/server.interface.ts';

interface ServerStore {
	server: IServer | null;
	roles: IServerRole[];
	serverCategories: IServerCategory[];
	serverMembers: IServerMember[];
	setServer: (server: IFServer) => void;
	clearServer: () => void;
}

export const useServerStore = create<ServerStore>(set => ({
	server: null,
	roles: [],
	serverCategories: [],
	serverMembers: [],
	setServer: (server: IFServer) => {
		const { roles, serverCategories, serverMembers, ...serverData } = server;
		set({ roles, serverCategories, serverMembers, server: serverData });
	},
	clearServer: () => set({ server: null, roles: [], serverCategories: [], serverMembers: [] })
}));
