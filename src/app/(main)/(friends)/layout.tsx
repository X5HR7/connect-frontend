import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
	title: `${APP_NAME} | Друзья`
};

const Layout = ({ children }: { children: ReactNode }) => {
	return <div>{children}</div>;
};

export default Layout;
