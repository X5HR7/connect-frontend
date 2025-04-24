import { EditPasswordButton } from '@features/settings/edit-password-button';
import { PageTitle } from '@shared/ui/settings/page-title/PageTitle.tsx';
import { SectionTitle } from '@shared/ui/settings/section-title/SectionTitle.tsx';
import { AccountProfile } from '@widgets/settings/account-profile';
import { FC } from 'react';
import styles from './page.module.scss';

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

export default SettingsAccountPage;
