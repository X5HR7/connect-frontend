import { ReactNode } from 'react';
import { IMessage, IUserWithProfile } from '@shared/libs/interfaces';

export interface MessageLayoutProps {
	message: IMessage;
	sender: IUserWithProfile;
	parentMessageSender?: IUserWithProfile;
	children?: ReactNode;
	showParentMessage?: boolean;
	handleUsernameClick: () => void;
}
