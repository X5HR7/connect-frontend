import { useCallback } from 'react';
import { useChatStore } from '@entities/direct-chat';
import { useAuthStore } from '@entities/user';
import { EVENTS } from '@shared/libs/interfaces';
import { useSocketStore } from '@shared/store/socketStore.ts';

export const useFinishCall = () => {
	const currentUser = useAuthStore(state => state.user);
	const receiver = useChatStore(state => state.receiver);
	const socket = useSocketStore(state => state.socket);

	return useCallback(() => {
		if (currentUser && socket && receiver?.user) {
			socket.emit(EVENTS.PRIVATE_CALL_END, { caller: currentUser, callee: receiver.user });
		}
	}, [currentUser, socket]);
};
