'use client';

import { FC } from 'react';
import { AcceptCallButton } from '@entities/direct-chat';
import { useAcceptCall } from '../../../model/hooks/use-accept-call.ts';

const AcceptCall: FC = () => {
	const acceptCall = useAcceptCall();

	const handleButtonClick = () => {
		acceptCall();
	};
	return <AcceptCallButton onClick={handleButtonClick} />;
};

export { AcceptCall };
