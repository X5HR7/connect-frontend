'use client';

import { FC } from 'react';
import { useAuthStore } from '@shared/store/authStore.ts';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import styles from './UserInfo.module.scss';

const UserInfo: FC = () => {
	const user = useAuthStore(state => state.user);

	return (
		<div className={styles.info}>
			<div className={styles.info__avatar}>
				<Avatar profile={user?.profile} size={90} indicatorSize={30} statusStyles={styles.info__status} />
			</div>
			<p className={styles.info__name}>{user?.profile.displayName || user?.username}</p>
		</div>
	);
};

export { UserInfo };
