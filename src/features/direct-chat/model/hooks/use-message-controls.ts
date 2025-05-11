import { useMemo } from 'react';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';

export const useMessageControls = ({ sender }: { sender: IUserWithProfile }) => {
	const user = useAuthStore(state => state.user);

	return useMemo(() => ({ isCurrentUserMessageCreator: user?.id === sender.id }), [user]);
};
