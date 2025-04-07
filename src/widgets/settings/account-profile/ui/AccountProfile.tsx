import { EditDisplayNameItem } from '@features/settings/edit-display-name-item';
import { EditEmailItem } from '@features/settings/edit-email-item';
import { EditPhoneItem } from '@features/settings/edit-phone-item';
import { EditUsernameItem } from '@features/settings/edit-username-item';
import { UserInfo } from '@features/settings/user-info';
import { urls } from '@shared/libs/utils/url.config.ts';
import Link from 'next/link';
import { FC } from 'react';
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
