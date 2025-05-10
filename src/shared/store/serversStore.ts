import { create } from 'zustand';
import { IServer } from '@shared/libs/interfaces/server.interface.ts';

interface ServersStore {
	servers: IServer[] | null;
	setServers: (servers: IServer[] | null) => void;
	addServer: (server: IServer) => void;
}

export const useServersStore = create<ServersStore>(set => ({
	servers: null,
	setServers: (servers: IServer[] | null) => set({ servers }),
	addServer: (server: IServer) =>
		set(state => ({
			servers: state.servers ? [...state.servers, server] : [server]
		}))
}));
