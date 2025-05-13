'use client';

import { FC } from 'react';
import { FinishCallButton } from '@entities/direct-chat';
import { useRejectCall } from '../../../model/hooks/use-reject-call.ts';

const RejectCall: FC = () => {
	const rejectCall = useRejectCall();

	const handleButtonClick = () => {
		rejectCall();
	};

	return <FinishCallButton onClick={handleButtonClick} />;
};

export { RejectCall };
