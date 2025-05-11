import { IMessage, IUserWithProfile } from '@shared/libs/interfaces';

export interface ParentMessageProps {
	message: IMessage;
	sender?: IUserWithProfile;
}
