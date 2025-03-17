import { AuthResponse } from '@shared/libs/api/api-client.ts';
import { AuthProvider } from '@shared/libs/providers/AuthProvider.tsx';
import { ServerListWidget } from '@widgets/server-list';
import { UserControlsWidget } from '@widgets/user-controls';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import styles from './layout.module.scss';

const Layout = async ({ children, sidebar }: { children: ReactNode; sidebar: ReactNode }) => {
	const cookieStore = await cookies();
	const authCookieData: string | undefined = cookieStore.get('authData')?.value;
	const data: AuthResponse | null = authCookieData ? JSON.parse(authCookieData) : null;

	return (
		<AuthProvider authData={data}>
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
