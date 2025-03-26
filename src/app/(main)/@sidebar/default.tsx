'use client';

import { urls } from '@shared/libs/utils/url.config.ts';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const ServerSidebar = dynamic(() => import('@widgets/server-sidebar'));
const FriendsSidebar = dynamic(() => import('@widgets/friends/friends-sidebar'));

const Sidebar = () => {
	const path = usePathname();

	if (path.startsWith(urls.SERVERS)) {
		return <ServerSidebar />;
	} else if (path.startsWith(urls.FRIENDS)) {
		return <FriendsSidebar />;
	} else {
		return null;
	}
};

export default Sidebar;
