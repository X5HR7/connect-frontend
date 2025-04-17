import { ServerProvider } from '@shared/libs/providers/ServerProvider.tsx';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { ServerMembers } from '@widgets/server/server-members';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import styles from './layout.module.scss';

export const metadata: Metadata = {
	title: `${APP_NAME} | Сервер`
};

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<ServerProvider>
			<header className={styles.top_panel}>Сервер | Главная страница</header>
			<div className={styles.content}>
				<div className={styles.main}>{children}</div>
				<aside className={styles.members}>
					<ServerMembers />
				</aside>
			</div>
		</ServerProvider>
	);
};

export default Layout;
