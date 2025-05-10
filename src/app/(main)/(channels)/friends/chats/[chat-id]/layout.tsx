import { ChatProvider } from '@shared/libs/providers/ChatProvider.tsx';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
	title: `${APP_NAME} | Чат`
};

const Layout = ({ children }: { children: ReactNode }) => {
	return <ChatProvider>{children}</ChatProvider>;
};

export default Layout;
