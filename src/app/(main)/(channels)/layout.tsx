import { ReactNode } from 'react';
import { UserControls } from '@widgets/user-controls';
import { UserServers } from '@widgets/user-servers';
import styles from './layout.module.scss';

const Layout = async ({ children, sidebar }: { children: ReactNode; sidebar: ReactNode }) => {
	return (
		<div className={styles.layout}>
			<aside className={styles.layout__servers}>
				<UserServers />
			</aside>
			<aside className={styles.layout__control}>
				<div className={styles['layout__control-sidebar']}>{sidebar}</div>
				<div className={styles['layout__control-user']}>
					<UserControls />
				</div>
			</aside>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
