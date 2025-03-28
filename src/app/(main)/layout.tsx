import { AuthProvider } from '@shared/libs/providers/AuthProvider.tsx';
import { ServerListWidget } from '@widgets/server-list';
import { UserControlsWidget } from '@widgets/user-controls';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import styles from './layout.module.scss';

const Layout = async ({ children, sidebar }: { children: ReactNode; sidebar: ReactNode }) => {
	const cookieStore = await cookies();
	const accessToken: string | undefined = cookieStore.get('access_token')?.value;

	return (
		<AuthProvider accessToken={accessToken}>
			<div className={styles.layout}>
				<aside className={styles.layout__servers}>
					<ServerListWidget />
				</aside>
				<aside className={styles.layout__control}>
					<div className={styles['layout__control-sidebar']}>{sidebar}</div>
					<div className={styles['layout__control-user']}>
						<UserControlsWidget />
					</div>
				</aside>
				<main>{children}</main>
			</div>
		</AuthProvider>
	);
};

export default Layout;
