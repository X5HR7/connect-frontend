import { FC } from 'react';
import { PageTitle } from '@shared/ui/settings/page-title/PageTitle.tsx';
import { SectionTitle } from '@shared/ui/settings/section-title/SectionTitle.tsx';
import { AccountProfile } from '../components/account-profile';
import { EditPasswordButton } from '../components/edit-password-button';
import styles from './SettingsAccountPage.module.scss';

const SettingsAccountPage: FC = () => {
	return (
		<div className={styles.page}>
			<PageTitle title={'Моя учётная запись'} />
			<section className={styles.page__profile}>
				<SectionTitle title={'Учетные данные'} />
				<AccountProfile />
			</section>
			<section className={styles.page__password}>
				<SectionTitle title={'Пароль и аутентификация'} />
				<EditPasswordButton />
			</section>
		</div>
	);
};

export { SettingsAccountPage };
