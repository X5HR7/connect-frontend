import { IMessage } from '@shared/libs/interfaces';

export interface MessageParentProps {
	parentMessage: IMessage;
	hiddenCloseButton?: boolean;
}
