import { IChat, IChatMember, IMessage } from '@shared/libs/interfaces';
import { create } from 'zustand/react';

interface ChatStore {
	chatId: string | null;
	messages: IMessage[];
	chatMembers: IChatMember[];
	setChat: (chat: IChat) => void;
	clearChat: () => void;
}

export const useChatStore = create<ChatStore>(set => ({
	chatId: null,
	setChat: (chat: IChat) => set({ chatId: chat.id, chatMembers: chat.chatMembers, messages: chat.messages }),
	messages: [],
	chatMembers: [],
	clearChat: () => set({ chatId: null, messages: [], chatMembers: [] })
}));
