import { IMessage, IUserWithProfile } from '@shared/libs/interfaces';

export interface DirectChatMessageProps {
	message: IMessage;
	sender: IUserWithProfile;
	parentMessageSender?: IUserWithProfile;
}
