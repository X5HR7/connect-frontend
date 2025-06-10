import { ReactNode } from 'react';
import styles from './layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.layout}>
			<section className={styles.layout__content}>{children}</section>
		</div>
	);
};

export default Layout;
