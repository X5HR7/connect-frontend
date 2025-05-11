import { create } from 'zustand';
import { IChat, IChatMember, IMessage } from '@shared/libs/interfaces';

interface ChatStore {
	chatId: string | null;
	messages: IMessage[];
	parentMessage: IMessage | null;
	receiver: IChatMember | null;
	chatMembers: IChatMember[];
	setChat: (chat: IChat, receiver: IChatMember | null) => void;
	setParentMessage: (parentMessage: IMessage | null) => void;
	addMessage: (message: IMessage) => void;
	updateMessage: (updatedMessage: IMessage) => void;
	deleteMessage: (deletedMessage: IMessage) => void;
	clearChat: () => void;
}

export const useChatStore = create<ChatStore>(set => ({
	chatId: null,
	setChat: (chat: IChat, receiver: IChatMember | null) =>
		set({ chatId: chat.id, chatMembers: chat.chatMembers, messages: chat.messages, receiver }),
	messages: [],
	parentMessage: null,
	setParentMessage: (parentMessage: IMessage | null) => set({ parentMessage }),
	receiver: null,
	chatMembers: [],
	addMessage: (message: IMessage) => set(state => ({ messages: [...state.messages, message] })),
	updateMessage: updatedMessage =>
		set(state => ({
			messages: state.messages.map(message => (message.id === updatedMessage.id ? updatedMessage : message))
		})),
	deleteMessage: deletedMessage =>
		set(state => ({
			messages: state.messages.filter(message => message.id !== deletedMessage.id)
		})),
	clearChat: () => set({ chatId: null, messages: [], chatMembers: [] })
}));
