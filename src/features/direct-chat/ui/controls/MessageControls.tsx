'use client';

import { FC, useState } from 'react';
import { useMessageControls } from '@features/direct-chat/model';
import { IMessage, IUserWithProfile } from '@shared/libs/interfaces';
import { MessageControlsBlock } from '@shared/ui/chat/';
import { ControlsAnswerButton, ControlsDeleteButton, ControlsEditButton, ControlsPinButton } from './buttons';

interface MessageControlsProps {
	message: IMessage;
	sender: IUserWithProfile;
}

const MessageControls: FC<MessageControlsProps> = ({ message, sender }) => {
	const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
	const { isCurrentUserMessageCreator } = useMessageControls({ sender });

	const handleMessageControlsButtonClick = () => {
		setIsModalOpened(prev => !prev);
	};

	return (
		<MessageControlsBlock onClick={handleMessageControlsButtonClick} isOpen={isModalOpened}>
			<ControlsAnswerButton message={message} />
			<ControlsPinButton message={message} />
			{isCurrentUserMessageCreator ? (
				<>
					<ControlsEditButton />
					<ControlsDeleteButton message={message} />
				</>
			) : null}
		</MessageControlsBlock>
	);
};

export { MessageControls };
