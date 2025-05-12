import { Metadata } from 'next';
import { ReactNode } from 'react';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { ChatProvider } from './_providers/ChatProvider.tsx';

export const metadata: Metadata = {
	title: `${APP_NAME} | Чат`
};

const Layout = ({ children }: { children: ReactNode }) => {
	return <ChatProvider>{children}</ChatProvider>;
};

export default Layout;
