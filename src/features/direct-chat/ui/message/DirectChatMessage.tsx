'use client';

import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import { MessageLayout } from '@entities/message';
import { useModalStore } from '@shared/store';
import { DirectChatMessageProps } from '../../lib/direct-chat-message.inteface.ts';

const ModalUserProfile = dynamic(() => import('@features/modal-user-profile'));
const MessageControls = dynamic(() => import('../controls/MessageControls.tsx'));

const DirectChatMessage: FC<DirectChatMessageProps> = ({ message, sender, parentMessageSender }) => {
	const openModal = useModalStore(state => state.openModal);

	const handleUsernameClick = () => {
		openModal(<ModalUserProfile userId={sender.id} />);
	};

	return (
		<MessageLayout
			message={message}
			sender={sender}
			handleUsernameClick={handleUsernameClick}
			showParentMessage={true}
			parentMessageSender={parentMessageSender}
		>
			<MessageControls message={message} sender={sender} />
		</MessageLayout>
	);
};

const MemoizedDirectChatMessage = memo(DirectChatMessage);

export { DirectChatMessage };
export { MemoizedDirectChatMessage };
