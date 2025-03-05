import { ReactNode } from 'react';
import styles from './layout.module.scss';

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.layout__content}>{children}</div>
		</div>
	);
};

export default AuthLayout;
