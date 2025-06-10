'use client';

import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import { MessageLayout } from '@entities/message';
import { modalService } from '@shared/services';
import { DirectChatMessageProps } from '../../lib/direct-chat-message.inteface.ts';

const ModalUserProfile = dynamic(() => import('@features/modal-user-profile').then(mod => mod.ModalUserProfile));
const MessageControls = dynamic(() => import('../controls/MessageControls.tsx').then(mod => mod.MessageControls));

const DirectChatMessage: FC<DirectChatMessageProps> = ({ message, sender, parentMessageSender }) => {
	const handleUsernameClick = () => {
		modalService.openDefaultModal(<ModalUserProfile userId={sender.id} />);
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
