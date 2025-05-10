'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useFriendUserStatus } from '@entities/friends/add-to-friend-button';
import { getFormatedDate } from '@shared/libs/utils/get-formated-date.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { Loader } from '@shared/ui/loader/Loader.tsx';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import { IModalUserProfileProps } from '../lib/modal-user-profile.interface.ts';
import { useGetUserInfo } from '../lib/use-get-user-info.ts';
import styles from './ModalUserProfile.module.scss';

const AddToFriendButton = dynamic(() => import('@entities/friends/add-to-friend-button/'));
const DeleteFromFriendButton = dynamic(() => import('@entities/friends/delete-from-friend-button'));

const ModalUserProfile: FC<IModalUserProfileProps> = ({ userId }) => {
	const currentUser = useAuthStore(state => state.user);
	const { data: user, isPending } = useGetUserInfo(userId);
	const { status: friendStatus } = useFriendUserStatus(user);

	return (
		<div className={styles.profile}>
			{!isPending && currentUser && user ? (
				<div className={styles.profile__content}>
					<section className={styles.profile__header}>
						<div className={styles['profile__header-avatar']}>
							<Avatar
								profile={user.profile}
								size={110}
								statusStyles={styles['profile__header-avatar-status']}
								indicatorSize={40}
							/>
						</div>
						{currentUser.id === user.id ? null : (
							<div className={styles['profile__header-buttons']}>
								{friendStatus === 'friend' ? (
									<DeleteFromFriendButton receiver={user} className={styles.profile__button} />
								) : (
									<AddToFriendButton receiver={user} status={friendStatus} className={styles.profile__button} />
								)}
							</div>
						)}
					</section>
					<section className={styles.profile__wrapper}>
						<div className={styles.profile__user}>
							<p className={styles['profile__user-name']}>{user.profile.displayName || user.username}</p>
							{user.profile.displayName ? <p className={styles['profile__user-username']}>{user.username}</p> : null}
						</div>
						<div className={styles.profile__info}>
							<ul className={styles['profile__info-header']}>
								<li className={`${styles['profile__info-header-item']} ${styles['profile__info-header-item_active']}`}>
									Обо мне
								</li>
								{user.id !== currentUser.id ? (
									<>
										<li className={styles['profile__info-header-item']}>Общих друзей - {user._count?.friends}</li>
										<li className={styles['profile__info-header-item']}>
											Общих серверов - {user._count?.serverMember}
										</li>
									</>
								) : null}
							</ul>
							<div className={styles['profile__info-description']}>
								<p className={styles['profile__info-description-title']}>Описание профиля</p>
								<p className={styles['profile__info-description-text']}>
									{user.profile.description || 'Пользователь не указал описание'}
								</p>
							</div>
							<div className={styles['profile__info-member']}>
								<p className={styles['profile__info-member-title']}>В числе участников с</p>
								<p className={styles['profile__info-member-text']}>{getFormatedDate(user.profile.createdAt)}</p>
							</div>
						</div>
					</section>
				</div>
			) : (
				<div className={styles.profile__loader}>
					<Loader size={70} borderWidth={6} color={'#5865f2'} />
				</div>
			)}
		</div>
	);
};

export { ModalUserProfile };
