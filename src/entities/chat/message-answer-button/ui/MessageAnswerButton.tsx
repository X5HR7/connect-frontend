import { MessageAnswerButtonProps } from '@entities/chat/message-answer-button/lib/message-answer-button.interface.ts';
import { useChatStore } from '@shared/store/chatStore.ts';
import { MessageControlButton } from '@shared/ui/chat/message-control-button/MessageControlButton.tsx';
import { ReplyIcon } from '@shared/ui/svg/ReplyIcon.tsx';
import { FC } from 'react';
import styles from './MessageAnswerButton.module.scss';

const MessageAnswerButton: FC<MessageAnswerButtonProps> = ({ messageId, setModalState }) => {
	const { messages, setParentMessage } = useChatStore();

	const handleButtonClick = () => {
		const parentMessage = messages.find(msg => msg.id === messageId);
		if (parentMessage) {
			setParentMessage(parentMessage);
			setModalState(false);
		}
	};

	return (
		<MessageControlButton text={'Ответить'} onClick={handleButtonClick}>
			<ReplyIcon className={styles.icon} itemClassName={styles.icon__item} />
		</MessageControlButton>
	);
};

export { MessageAnswerButton };
