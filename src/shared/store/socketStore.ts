import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';
import { Socket, io } from 'socket.io-client';
import { create } from 'zustand/react';

interface SocketStore {
	socket: Socket | null;
	connect: (token: string) => Socket;
	disconnect: () => void;
}

export const useSocketStore = create<SocketStore>(set => ({
	socket: null,
	connect: (token: string) => {
		const socket = io(BASE_SERVER_URL, {
			extraHeaders: {
				Authorization: token
			},
			transports: ['polling', 'websocket'],
			withCredentials: true,
			upgrade: true
		});

		socket.on('connect', () => {
			set({ socket });
		});

		return socket;
	},
	disconnect: () => {
		set(state => {
			state.socket?.disconnect();
			return { socket: null };
		});
	}
}));
