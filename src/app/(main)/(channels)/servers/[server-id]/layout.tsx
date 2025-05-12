import { Metadata } from 'next';
import { ReactNode } from 'react';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { ServerProvider } from './_providers/ServerProvider.tsx';

export const metadata: Metadata = {
	title: `${APP_NAME} | Сервер`
};

const Layout = ({ children }: { children: ReactNode }) => {
	return <ServerProvider>{children}</ServerProvider>;
};

export default Layout;
