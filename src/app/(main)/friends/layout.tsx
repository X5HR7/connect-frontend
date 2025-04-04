import { FriendsProvider } from '@shared/libs/providers/FriendsProvider.tsx';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
	title: `${APP_NAME} | Друзья`
};

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<FriendsProvider>{children}</FriendsProvider>
		</>
	);
};

export default Layout;
