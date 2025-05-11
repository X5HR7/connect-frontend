'use client';

import { FC } from 'react';
import { usePinMessage } from '@features/direct-chat/model';
import { PinButton } from '@entities/message';
import { IMessage } from '@shared/libs/interfaces';

interface ControlsPinButtonProps {
	message: IMessage;
}

const ControlsPinButton: FC<ControlsPinButtonProps> = ({ message }) => {
	const { mutate: pinMessage, isPending } = usePinMessage(message.id);

	const handleButtonClick = () => {
		pinMessage(message.id);
	};

	return <PinButton isPinned={message.isPinned} onClick={handleButtonClick} disabled={isPending} />;
};

export { ControlsPinButton };
