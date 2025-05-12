import { Metadata } from 'next';
import { ReactNode } from 'react';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { ServerChatProvider } from './_providers/ServerChatProvider.tsx';

export const metadata: Metadata = {
	title: `${APP_NAME} | Канал сервера`
};

interface LayoutProps {
	children: ReactNode;
	params: Promise<{ 'server-id': string; 'category-id': string; 'channel-id': string }>;
}

const Layout = async ({ children, params }: LayoutProps) => {
	const { 'server-id': serverId, 'category-id': categoryId, 'channel-id': channelId } = await params;

	return (
		<ServerChatProvider serverId={serverId} categoryId={categoryId} channelId={channelId}>
			{children}
		</ServerChatProvider>
	);
};

export default Layout;
