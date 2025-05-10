import Image from 'next/image';
import { FC } from 'react';
import { usePinMessage } from '@entities/chat/message-pin-button/lib/use-pin-message.ts';
import pinIcon from '@shared/assets/icons/pinned.svg';
import { useChatStore } from '@shared/store/chatStore.ts';
import { MessageControlButton } from '@shared/ui/chat/message-control-button/MessageControlButton.tsx';
import { MessagePinButtonProps } from '../lib/message-pin-button.interface.ts';
import styles from './MessagePinButton.module.scss';

const MessagePinButton: FC<MessagePinButtonProps> = ({ messageId, isPinned = false, setModalState }) => {
	const updateMessage = useChatStore(state => state.updateMessage);
	const { mutate: pinMessage, isPending } = usePinMessage();

	const handleButtonClick = () => {
		pinMessage(messageId, {
			onSuccess: message => {
				if (message?.id) {
					updateMessage(message);
					setModalState(false);
				}
			}
		});
	};

	return (
		<MessageControlButton text={isPinned ? 'Открепить' : 'Закрепить'} onClick={handleButtonClick} disabled={isPending}>
			<Image src={pinIcon} alt={'Pin'} className={styles.icon} />
		</MessageControlButton>
	);
};

export { MessagePinButton };
