'use client';

import { FC } from 'react';
import { DirectChatCall } from '@features/direct-chat';
import { TCallStatus, useCallStore } from '@entities/direct-chat';

const statuses: TCallStatus[] = ['IDLE', 'FAILED', 'REJECTED'];

const Call: FC = () => {
	const callStatus = useCallStore(state => state.callStatus);

	return statuses.includes(callStatus) ? null : <DirectChatCall />;
};

export { Call };
