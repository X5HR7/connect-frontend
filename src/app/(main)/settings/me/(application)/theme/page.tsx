import { PageTitle } from '@shared/ui/settings/page-title/PageTitle.tsx';
import { SectionTitle } from '@shared/ui/settings/section-title/SectionTitle.tsx';
import { ThemeSelector } from '@widgets/settings/theme-selector';
import styles from './page.module.scss';

const AppThemePage = () => {
	return (
		<div className={styles.page}>
			<PageTitle title={'Внешний вид приложения'} />
			<section className={styles.page__selector}>
				<SectionTitle title={'Тема'} />
				<ThemeSelector />
			</section>
		</div>
	);
};

export default AppThemePage;
