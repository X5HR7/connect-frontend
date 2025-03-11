import { IProfileProps } from '@features/user-controls/profile/lib/profile.interface.ts';
import { getUserStatus } from '@shared/libs/utils/getUserStatus.ts';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import { FC } from 'react';
import styles from './Profile.module.scss';

const Profile: FC<IProfileProps> = ({ user, onClick }) => {
	return (
		<div className={styles.profile} onClick={onClick}>
			<Avatar profile={user.profile} size={36} statusStyles={styles.profile__status} />
			<div className={styles.profile__info}>
				<p className={styles['profile__info-username']}>{user.profile.displayName || user.username}</p>
				<p className={styles['profile__info-status']}>{getUserStatus(user.profile.status)}</p>
			</div>
		</div>
	);
};

export { Profile };
