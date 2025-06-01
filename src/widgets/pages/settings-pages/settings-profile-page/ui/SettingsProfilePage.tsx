import { PageTitle } from '@shared/ui/settings';
import { Profile } from '../components/profile';
import styles from './SettingsProfilePage.module.scss';

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

export { SettingsProfilePage };
