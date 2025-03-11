import { IProfileProps } from '@features/user-controls/profile/lib/profile.interface.ts';
import profileAvatar from '@shared/assets/icons/profile_avatar_temlate.png';
import { getUserStatus } from '@shared/libs/utils/getUserStatus.ts';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Profile.module.scss';

const Profile: FC<IProfileProps> = ({ user, onClick }) => {
	return (
		<div className={styles.profile} onClick={onClick}>
			<div className={styles.profile__avatar}>
				<Image
					src={user.profile.avatar || profileAvatar}
					alt={'profile image'}
					className={styles['profile__avatar-image']}
				/>
				<div className={styles['profile__avatar-status']}>
					<div className={styles['profile__avatar-status-' + user.profile.status]}></div>
				</div>
			</div>
			<div className={styles.profile__info}>
				<p className={styles['profile__info-username']}>{user.profile.displayName || user.username}</p>
				<p className={styles['profile__info-status']}>{getUserStatus(user.profile.status)}</p>
			</div>
		</div>
	);
};

export { Profile };
