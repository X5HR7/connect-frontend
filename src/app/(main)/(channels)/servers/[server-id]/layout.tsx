import { ServerProvider } from '@shared/libs/providers/ServerProvider.tsx';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
	title: `${APP_NAME} | Сервер`
};

const Layout = ({ children }: { children: ReactNode }) => {
	return <ServerProvider>{children}</ServerProvider>;
};

export default Layout;
