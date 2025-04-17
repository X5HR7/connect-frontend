import { PageTitle } from '@shared/ui/settings/page-title/PageTitle.tsx';
import { Profile } from '@widgets/settings/profile';
import styles from './page.module.scss';

const SettingsProfilePage = () => {
	return (
		<div className={styles.page}>
			<PageTitle title={'Профиль'} />
			<section className={styles.page__profile}>
				<Profile />
			</section>
		</div>
	);
};

export default SettingsProfilePage;
