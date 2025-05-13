'use client';

import { FC } from 'react';
import { FinishCallButton } from '@entities/direct-chat';
import { useFinishCall } from '../../../model/hooks/use-finish-call.ts';

const FinishCall: FC = () => {
	const finishCall = useFinishCall();

	const handleButtonClick = () => {
		finishCall();
	};

	return <FinishCallButton onClick={handleButtonClick} />;
};

export { FinishCall };
