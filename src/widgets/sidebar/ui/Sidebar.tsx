'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { urls } from '@shared/libs/utils/url.config.ts';

const ServerSidebar = dynamic(() => import('../components/server-sidebar'));
const FriendsSidebar = dynamic(() => import('../components/friends-sidebar'));

const Sidebar: FC = () => {
	const path = usePathname();

	if (path.startsWith(urls.SERVERS)) {
		return <ServerSidebar />;
	} else if (path.startsWith(urls.FRIENDS)) {
		return <FriendsSidebar />;
	} else {
		return null;
	}
};

export { Sidebar };
