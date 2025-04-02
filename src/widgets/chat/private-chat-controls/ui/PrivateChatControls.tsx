import { UserProfile } from '@features/chat/user-profile';
import { FC } from 'react';
import styles from './PrivateChatControls.module.scss';

const PrivateChatControls: FC = () => {
	return (
		<div className={styles.controls}>
			<div className={styles.controls__profile}>
				<UserProfile />
			</div>
			<div className={styles.controls__elements}>
				<div className={styles['controls__elements-buttons']}>buttons</div>
				<search className={styles['controls__elements-search']}>search</search>
			</div>
		</div>
	);
};

export { PrivateChatControls };
