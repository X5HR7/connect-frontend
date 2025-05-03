import { SwitchThemeItem } from '@features/settings/switch-theme-item';
import { SynchronizeThemeItem } from '@features/settings/synchronize-theme-item';
import { FC } from 'react';
import { themes } from '../lib/themes.ts';
import styles from './ThemeSelector.module.scss';

const ThemeSelector: FC = () => {
	return (
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
	);
};

export { ThemeSelector };
