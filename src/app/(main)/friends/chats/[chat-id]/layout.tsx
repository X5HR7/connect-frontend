import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
	title: `${APP_NAME} | Чат`
};

const Layout = ({ children }: { children: ReactNode }) => {
	return <>{children}</>;
};

export default Layout;
