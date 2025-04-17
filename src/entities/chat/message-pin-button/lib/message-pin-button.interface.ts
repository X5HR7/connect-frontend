import { Dispatch, SetStateAction } from 'react';

export interface MessagePinButtonProps {
	messageId: string;
	isPinned?: boolean;
	setModalState: Dispatch<SetStateAction<boolean>>;
}
