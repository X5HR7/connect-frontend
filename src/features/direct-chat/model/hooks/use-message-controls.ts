import { useMemo } from 'react';
import { useAuthStore } from '@entities/user';
import { IUserWithProfile } from '@shared/libs/interfaces';

export const useMessageControls = ({ sender }: { sender: IUserWithProfile }) => {
	const user = useAuthStore(state => state.user);

	return useMemo(() => ({ isCurrentUserMessageCreator: user?.id === sender.id }), [user]);
};
