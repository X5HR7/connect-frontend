import { ServerChatProvider } from '@shared/libs/providers/ServerChatProvider.tsx';
import { ReactNode } from 'react';

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
