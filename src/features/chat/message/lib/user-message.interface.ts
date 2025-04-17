import { IMessage, IUserWithProfile } from '@shared/libs/interfaces';

export interface IUserMessageProps {
	message: IMessage;
	sender: IUserWithProfile;
	showControls?: boolean;
}
