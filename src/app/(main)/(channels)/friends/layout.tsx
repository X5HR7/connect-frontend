import { Metadata } from 'next';
import { ReactNode } from 'react';
import { APP_NAME } from '@shared/libs/utils/constants.ts';

export const metadata: Metadata = {
	title: `${APP_NAME} | Друзья`
};

const Layout = ({ children }: { children: ReactNode }) => {
	return <>{children}</>;
};

export default Layout;
