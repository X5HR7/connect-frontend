'use client';

import { FC } from 'react';
import { useAnswerMessage } from '@features/direct-chat/model';
import { AnswerButton } from '@entities/message';
import { IMessage } from '@shared/libs/interfaces';

interface ControlsAnswerButtonProps {
	message: IMessage;
}

const ControlsAnswerButton: FC<ControlsAnswerButtonProps> = ({ message }) => {
	const { answerMessage } = useAnswerMessage();

	const handleButtonClick = () => {
		answerMessage(message);
	};

	return <AnswerButton onClick={handleButtonClick} />;
};

export { ControlsAnswerButton };
