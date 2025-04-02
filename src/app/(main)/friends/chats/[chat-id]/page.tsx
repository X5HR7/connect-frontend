import { PrivateChatControls } from '@/widgets/chat/private-chat-controls';
import { ChatProvider } from '@shared/libs/providers/ChatProvider.tsx';
import { ChatMessages } from '@widgets/chat/messages';
import styles from './page.module.scss';

const ChatPage = async ({ params }: { params: { 'chat-id': string } }) => {
	const { 'chat-id': chatId } = await params;

	return (
		<div className={styles.page}>
			<ChatProvider chatId={chatId}>
				<div className={styles.page__panel}>
					<PrivateChatControls />
				</div>
				<div className={styles.page__chat}>
					<ChatMessages />
				</div>
			</ChatProvider>
		</div>
	);
};

export default ChatPage;
