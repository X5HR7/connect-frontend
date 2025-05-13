import { useCallback } from 'react';
import { useCallStore } from '@entities/direct-chat';
import { useAuthStore } from '@entities/user';
import { EVENTS } from '@shared/libs/interfaces';
import { useSocketStore } from '@shared/store/socketStore.ts';

export const useRejectCall = () => {
	const user = useAuthStore(state => state.user);
	const caller = useCallStore(state => state.caller);
	const socket = useSocketStore(state => state.socket);

	return useCallback(() => {
		if (caller && socket && user) {
			socket.emit(EVENTS.PRIVATE_CALL_REJECT, { caller, callee: user });
		}
	}, [caller, socket, user]);
};
