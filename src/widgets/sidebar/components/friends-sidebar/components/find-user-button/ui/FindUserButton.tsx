import dynamic from 'next/dynamic';
import { FC } from 'react';
import { modalService } from '@shared/services';
import styles from './FindUserButton.module.scss';

const FindUserModal = dynamic(() => import('../components/find-user-modal').then(mod => mod.FindUserModal));

const FindUserButton: FC = () => {
	const handleSidebarHeaderClick = () => {
		modalService.openDefaultModal(<FindUserModal />);
	};

	return (
		<button type={'button'} className={styles.button} onClick={handleSidebarHeaderClick}>
			Найти или начать беседу
		</button>
	);
};

export { FindUserButton };
