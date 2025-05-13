import { Metadata } from 'next';
import { ReactNode } from 'react';
import { CallProvider } from '@app/(main)/(channels)/friends/chats/[chat-id]/_providers/CallProvider.tsx';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { ChatProvider } from './_providers/ChatProvider.tsx';

export const metadata: Metadata = {
	title: `${APP_NAME} | Чат`
};

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<ChatProvider>
			<CallProvider>{children}</CallProvider>
		</ChatProvider>
	);
};

export default Layout;
