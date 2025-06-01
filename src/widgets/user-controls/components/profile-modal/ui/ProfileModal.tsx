'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { useAuthStore } from '@entities/user';
import { getUserStatus } from '@shared/libs/utils/get-user-status.ts';
import { urls } from '@shared/libs/utils/url.config.ts';
import { Avatar } from '@shared/ui/user';
import { IProfileModalProps } from '../lib/profile-modal.interface.ts';
import { useLogout } from '../lib/use-logout.ts';
import styles from './ProfileModal.module.scss';

const ProfileStatusSelector = dynamic(() => import('../components/profile-status-selector'));

const ProfileModal: FC<IProfileModalProps> = ({ isOpen }) => {
	const [isStatusModalOpen, setIsStatusModalOpen] = useState<boolean>(false);
	const user = useAuthStore(state => state.user);
	const { mutate: logout, isPending } = useLogout();
	const router = useRouter();

	const handleStatusButtonClick = () => {
		setIsStatusModalOpen(prev => !prev);
	};

	const handleQuitButtonClick = () => {
		logout(undefined, {
			onSuccess: data => {
				if (data.message) {
					router.push(urls.SIGN_IN);
				}
			}
		});
	};

	useEffect(() => {
		if (!isOpen) setIsStatusModalOpen(false);
	}, [isOpen]);

	return (
		<div className={`${styles.modal} ${isOpen ? styles.modal_opened : ''}`}>
			<div className={styles.modal__content}>
				<div className={styles.profile}>
					<Avatar profile={user?.profile} size={80} statusStyles={styles.profile__status} indicatorSize={30} />
					<div className={styles.profile__info}>
						<p className={styles['profile__info-name']}>{user?.profile.displayName}</p>
						<p className={styles['profile__info-username']}>{user?.username}</p>
					</div>
				</div>
				<div className={styles.buttons}>
					<Link href={urls.SETTINGS_ACCOUNT} className={`${styles.buttons__button} ${styles.buttons__button_link}`}>
						Редактировать профиль
					</Link>
					<div className={styles.buttons__border}></div>
					<button type={'button'} className={styles.buttons__button} onClick={handleStatusButtonClick}>
						{getUserStatus(user?.profile.status)}
					</button>
					<div className={`${styles.buttons__selector} ${isStatusModalOpen ? styles.buttons__selector_opened : ''}`}>
						<ProfileStatusSelector />
					</div>
				</div>
				<div className={styles.buttons}>
					<button
						className={`${styles.buttons__button} ${styles.buttons__button_exit}`}
						onClick={handleQuitButtonClick}
						disabled={isPending}
					>
						Выйти из учетной записи
					</button>
				</div>
			</div>
		</div>
	);
};

export { ProfileModal };
