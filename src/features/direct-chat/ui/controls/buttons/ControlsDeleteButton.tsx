'use client';

import { FC } from 'react';
import { useDeleteMessage } from '@features/direct-chat/model';
import { DeleteButton } from '@entities/message';

const ControlsDeleteButton: FC = () => {
	const _ = useDeleteMessage();

	const handleButtonClick = () => {};

	return <DeleteButton onClick={handleButtonClick} disabled={false} />;
};

export { ControlsDeleteButton };
