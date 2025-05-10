import { create } from 'zustand';
import { IServerChannel, IServerMember, IServerMessage, IServerTextChannel } from '@shared/libs/interfaces';

interface ServerChatStore {
	serverTextChannelId: string | null;
	serverChannel: IServerChannel | null;
	chatMembers: IServerMember[];
	messages: IServerMessage[];
	setChat: (chat: IServerTextChannel) => void;
	addMessage: (message: IServerMessage) => void;
	clearChat: () => void;
}

export const useServerChatStore = create<ServerChatStore>(set => ({
	serverTextChannelId: null,
	serverChannel: null,
	chatMembers: [],
	messages: [],
	setChat: (chat: IServerTextChannel) =>
		set({
			serverTextChannelId: chat.id,
			chatMembers: [],
			messages: chat.messages,
			serverChannel: chat.channel
		}),
	addMessage: (message: IServerMessage) => set(state => ({ messages: [...state.messages, message] })),
	clearChat: () => set({ serverTextChannelId: null, chatMembers: [], messages: [], serverChannel: null })
}));
