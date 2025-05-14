'use client';

import { FC } from 'react';
import { useDeleteMessage } from '@features/direct-chat/model';
import { DeleteButton } from '@entities/message';
import { IMessage } from '@shared/libs/interfaces';

interface ControlsDeleteButtonProps {
	message: IMessage;
}

const ControlsDeleteButton: FC<ControlsDeleteButtonProps> = ({ message }) => {
	const { mutate: deleteMessage, isPending } = useDeleteMessage();

	const handleButtonClick = () => {
		deleteMessage(message.id);
	};

	return <DeleteButton onClick={handleButtonClick} disabled={isPending} />;
};

export { ControlsDeleteButton };
