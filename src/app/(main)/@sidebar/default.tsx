'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const ServerSidebar = dynamic(() => import('@widgets/server-sidebar'));
const FriendsSidebar = dynamic(() => import('@widgets/friends-sidebar'));

const Sidebar = () => {
	const path = usePathname();
	if (path.startsWith('/server')) {
		return <ServerSidebar />;
	} else {
		return <FriendsSidebar />;
	}
};

export default Sidebar;
