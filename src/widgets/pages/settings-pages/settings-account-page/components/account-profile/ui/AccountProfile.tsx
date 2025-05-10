import Link from 'next/link';
import { FC } from 'react';
import { urls } from '@shared/libs/utils/url.config.ts';
import { EditDisplayNameItem } from '../components/edit-display-name-item';
import { EditEmailItem } from '../components/edit-email-item';
import { EditPhoneItem } from '../components/edit-phone-item';
import { EditUsernameItem } from '../components/edit-username-item';
import { UserInfo } from '../components/user-info';
import styles from './AccountProfile.module.scss';

const AccountProfile: FC = () => {
	return (
		<div className={styles.profile}>
			<div className={styles.profile__header}>
				<div className={styles['profile__header-user']}>
					<UserInfo />
				</div>
				<div className={styles['profile__header-buttons']}>
					<Link href={urls.SETTINGS_PROFILE} replace={true} className={styles['profile__header-button']}>
						Редактировать профиль пользователя
					</Link>
				</div>
			</div>
			<div className={styles.profile__info}>
				<EditDisplayNameItem />
				<EditUsernameItem />
				<EditEmailItem />
				<EditPhoneItem />
			</div>
		</div>
	);
};

export { AccountProfile };
