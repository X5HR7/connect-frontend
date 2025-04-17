import { FC, ReactNode } from 'react';
import styles from './ServerMembersGroup.module.scss';

interface ServerMembersGroupProps {
	children?: ReactNode;
	title?: string;
}

const ServerMembersGroup: FC<ServerMembersGroupProps> = ({ children, title }) => {
	return (
		<div className={styles.group}>
			<p className={styles.group__title}>{title}</p>
			<ul className={styles.group__items}>{children}</ul>
		</div>
	);
};

export { ServerMembersGroup };
