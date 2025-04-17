import { Dispatch, SetStateAction } from 'react';

export interface MessageAnswerButtonProps {
	messageId: string;
	setModalState: Dispatch<SetStateAction<boolean>>;
}
