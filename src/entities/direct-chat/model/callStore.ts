import { create } from 'zustand';
import { IUserWithProfile } from '@shared/libs/interfaces';

export type TCallStatus =
	| 'IDLE' //	Звонок не активен (начальное состояние). Устанавливается после завершения предыдущего звонка или при старте
	| 'INIT' // Инициация звонка (ожидание подтверждения от сервера)
	| 'PENDING' // Ожидание ответа от второго пользователя (callee)
	| 'RECEIVED' // Вторым пользователем принят звонок от первого (ожидание принятия или отклонения звонка)
	| 'ACCEPTED' // Звонок принят вторым пользователем (callee), идет установка WebRTC-соединения
	| 'REJECTED' // Звонок отклонен вторым пользователем (callee)
	| 'CONNECTING' // Идет подключение WebRTC (обмен кандидатами, установка P2P)
	| 'ACTIVE' // Разговор идет (WebRTC-соединение установлено)
	| 'ENDING' // Завершение звонка (ожидание подтверждения от сервера)
	| 'ENDED' // Звонок завершен после подтверждения сервером
	| 'FAILED'; // Ошибка (например, нет сети, WebRTC не смог подключиться)

interface CallStore {
	caller: IUserWithProfile | null;
	setCaller: (caller: IUserWithProfile) => void;

	callee: IUserWithProfile | null;
	setCallee: (callee: IUserWithProfile) => void;

	setCallMembers: ({ caller, callee }: { caller: IUserWithProfile; callee: IUserWithProfile }) => void;

	callStatus: TCallStatus;
	setCallStatus: (status: TCallStatus) => void;

	clearCall: () => void;
}

export const useCallStore = create<CallStore>(set => ({
	caller: null,
	setCaller: caller => set({ caller }),

	callee: null,
	setCallee: callee => set({ callee }),

	setCallMembers: callMembers => set({ ...callMembers }),

	callStatus: 'IDLE',
	setCallStatus: (status: TCallStatus) => set({ callStatus: status }),

	clearCall: () => set({ callStatus: 'IDLE', callee: null, caller: null })
}));
