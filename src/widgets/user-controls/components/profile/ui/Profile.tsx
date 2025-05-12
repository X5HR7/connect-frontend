'use client';

import { FC } from 'react';
import { useAuthStore } from '@entities/user';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import { ProfileProps } from '../lib/profile.interface.ts';
import styles from './Profile.module.scss';

const Profile: FC<ProfileProps> = ({ onClick }) => {
	const user = useAuthStore(state => state.user);

	return (
		<div className={styles.profile} onClick={onClick}>
			<div className={styles.profile__avatar}>
				<Avatar profile={user?.profile} size={36} statusStyles={styles.profile__status} />
			</div>
			<div className={styles.profile__info}>
				<p className={styles['profile__info-name']}>{user?.profile.displayName || user?.username}</p>
				{user?.profile.displayName ? <p className={styles['profile__info-username']}>{user.username}</p> : null}
			</div>
		</div>
	);
};

export { Profile };
