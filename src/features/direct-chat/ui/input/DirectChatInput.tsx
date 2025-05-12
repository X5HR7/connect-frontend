'use client';

import { FC, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import { TextArea } from '@shared/ui/form/text-area';
import { SendMessageIcon, UploadIcon } from '@shared/ui/svg';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import { useChatStore } from '../../../../entities/direct-chat';
import { useSendMessage } from '../../model/hooks/use-send-message.ts';
import styles from './DirectChatInput.module.scss';
import { AnswerView } from './answer-view/AnswerView.tsx';

const DirectChatInput: FC = () => {
	const { addMessage, chatId, parentMessage, setParentMessage, chatMembers } = useChatStore(
		useShallow(state => ({
			addMessage: state.addMessage,
			chatId: state.chatId,
			parentMessage: state.parentMessage,
			setParentMessage: state.setParentMessage,
			chatMembers: state.chatMembers
		}))
	);
	const [message, setMessage] = useState<string>('');
	const { mutate: sendMessage, isPending } = useSendMessage();

	const handleMessageChange = (value: string) => {
		setMessage(value);
	};

	const handleMessageSend = () => {
		if (message.trim() && chatId) {
			sendMessage(
				{ chatId, text: message.trim(), parentId: parentMessage?.id },
				{
					onSuccess: data => {
						setMessage('');
						addMessage(data);
						setParentMessage(null);
					}
				}
			);
		}
	};

	return (
		<div className={styles.input}>
			{parentMessage ? (
				<AnswerView sender={chatMembers.find(member => member.id === parentMessage.userId)?.user} />
			) : null}
			<div className={styles.input__content}>
				<Tooltip text={'Загрузить'} position={'top'}>
					<button className={styles.input__upload}>
						<UploadIcon className={styles['input__upload-icon']} />
					</button>
				</Tooltip>
				<TextArea value={message} onChange={handleMessageChange} placeholder={'Написать'} />
				<button className={styles.input__send} onClick={handleMessageSend} disabled={isPending}>
					<SendMessageIcon className={styles['input__send-icon']} />
				</button>
			</div>
		</div>
	);
};

export { DirectChatInput };
