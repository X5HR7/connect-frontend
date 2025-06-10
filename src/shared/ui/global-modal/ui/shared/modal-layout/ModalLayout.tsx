import { FC, ReactNode } from 'react';
import styles from './ModalLayout.module.scss';

export interface LayoutProps {
	children?: ReactNode;
	buttons?: ReactNode;
}

const ModalLayout: FC<LayoutProps> = ({ children, buttons }) => {
	return (
		<div className={styles.modal}>
			{children}
			{buttons ? <div className={styles.modal__buttons}>{buttons}</div> : null}
		</div>
	);
};

export { ModalLayout };
