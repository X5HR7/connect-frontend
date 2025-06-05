import { FC, ReactNode } from 'react';
import styles from './Selection.module.scss';

interface SelectionProps {
	children?: ReactNode;
}

const Selection: FC<SelectionProps> = ({ children }) => {
	return <div className={styles.selection}>{children}</div>;
};

export { Selection };
