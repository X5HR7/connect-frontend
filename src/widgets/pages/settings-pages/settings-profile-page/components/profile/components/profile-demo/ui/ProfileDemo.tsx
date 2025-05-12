import { FC } from 'react';
import { useAuthStore } from '@entities/user';
import { getFormatedDate } from '@shared/libs/utils/get-formated-date.ts';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import { ProfileDemoProps } from '../lib/profile-demo.interface.ts';
import styles from './ProfileDemo.module.scss';

const ProfileDemo: FC<ProfileDemoProps> = ({ displayName = '', description = '' }) => {
	const user = useAuthStore(state => state.user);

	return (
		<div className={styles.profile}>
			<div className={styles.profile__avatar}>
				<Avatar profile={user?.profile} size={80} indicatorSize={30} statusStyles={styles.profile__status} />
			</div>
			<div className={styles.profile__info}>
				<p className={styles['profile__info-name']}>{displayName || user?.username || ''}</p>
				{displayName && <p className={styles['profile__info-username']}>{user?.username || ''}</p>}
			</div>
			<div className={styles.profile__description}>
				<div className={styles['profile__description-item']}>
					<p className={styles['profile__description-item-name']}>Описание профиля</p>
					<p className={styles['profile__description-item-value']}>
						{description || 'Пользователь не указал описание'}
					</p>
				</div>
				<div className={styles['profile__description-item']}>
					<p className={styles['profile__description-item-name']}>В числе участников с</p>
					<p className={styles['profile__description-item-value']}>
						{user ? getFormatedDate(user?.profile.createdAt) : ''}
					</p>
				</div>
			</div>
		</div>
	);
};

export { ProfileDemo };
