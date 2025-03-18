import { ReactNode } from 'react';
import { create } from 'zustand/react';

interface ModalStore {
	isOpen: boolean;
	content: ReactNode | null;
	openModal: (content: ReactNode) => void;
	closeModal: () => void;
}

export const useModalStore = create<ModalStore>(set => ({
	isOpen: false,
	content: null,
	openModal: content => set({ isOpen: true, content: content }),
	closeModal: () => set({ isOpen: false, content: null })
}));
