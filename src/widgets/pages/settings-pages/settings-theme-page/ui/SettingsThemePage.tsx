import { PageTitle, SectionTitle } from '@shared/ui/settings';
import { SwitchThemeItem } from '../components/switch-theme-item';
import { SynchronizeThemeItem } from '../components/synchronize-theme-item';
import { themes } from '../lib/themes.ts';
import styles from './SettingsThemePage.module.scss';

const SettingsThemePage = () => {
	return (
		<div className={styles.page}>
			<PageTitle title={'Внешний вид приложения'} />
			<section className={styles.page__selector}>
				<SectionTitle title={'Тема'} />
				<ul className={styles.selector}>
					{themes.map(theme => (
						<li className={styles.selector__item} key={theme.value}>
							<SwitchThemeItem theme={theme} />
						</li>
					))}
					<li className={styles.selector__item}>
						<SynchronizeThemeItem />
					</li>
				</ul>
			</section>
		</div>
	);
};

export { SettingsThemePage };
