'use client';

import { MessageParent } from '@entities/chat/message-parent';
import sendIcon from '@shared/assets/icons/send_button.svg';
import uploadIcon from '@shared/assets/icons/upload.svg';
import { useChatStore } from '@shared/store/chatStore.ts';
import { TextArea } from '@shared/ui/text-area/TextArea.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useSendMessage } from '../lib/useSendMessage.ts';
import styles from './ChatInput.module.scss';

const ChatInput: FC = () => {
	const { addMessage, chatId, parentMessage, setParentMessage } = useChatStore();
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
			{parentMessage ? <MessageParent parentMessage={parentMessage} hiddenCloseButton={false} /> : null}
			<Tooltip text={'Загрузить'} position={'top'}>
				<button className={styles.input__upload}>
					<Image src={uploadIcon} alt={'Upload'} className={styles['input__upload-icon']} />
				</button>
			</Tooltip>
			<TextArea value={message} onChange={handleMessageChange} placeholder={'Написать'} />
			<button className={styles.input__send} onClick={handleMessageSend} disabled={isPending}>
				<Image src={sendIcon} alt={'Upload'} className={styles['input__send-icon']} />
			</button>
		</div>
	);
};

export { ChatInput };
