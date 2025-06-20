'use client';

import { FC } from 'react';
import { useChatStore } from '@entities/direct-chat';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { InputAnswer } from '@shared/ui/chat';

interface AnswerViewProps {
	sender?: IUserWithProfile;
}

const AnswerView: FC<AnswerViewProps> = ({ sender }) => {
	const setParentMessage = useChatStore(state => state.setParentMessage);

	const handleCloseButtonClick = () => {
		setParentMessage(null);
	};

	return <InputAnswer userName={sender?.profile.displayName || sender?.username} onClick={handleCloseButtonClick} />;
};

export { AnswerView };
