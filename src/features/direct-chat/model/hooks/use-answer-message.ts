import { useChatStore } from '@/entities/direct-chat';
import { IMessage } from '@shared/libs/interfaces';

export const useAnswerMessage = () => {
	const setParentMessage = useChatStore(state => state.setParentMessage);

	const setMessage = (message: IMessage) => {
		setParentMessage(message);
	};

	return { answerMessage: setMessage };
};
