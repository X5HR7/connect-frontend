import { ServerListWidget } from '@widgets/server-list';
import { UserControlsWidget } from '@widgets/user-controls';
import { ReactNode } from 'react';
import styles from './layout.module.scss';

const Layout = ({ children, sidebar }: { children: ReactNode; sidebar: ReactNode }) => {
	return (
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
	);
};

export default Layout;
