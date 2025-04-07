import { FC, ReactNode } from 'react';
import styles from './Modal.module.scss';

interface IModalProps {
	title?: string;
	children: ReactNode;
}

const Modal: FC<IModalProps> = ({ children, title = '' }) => {
	return (
		<div className={styles.modal}>
			<h2 className={styles.modal__title}>{title}</h2>
			{children}
		</div>
	);
};

export { Modal };
