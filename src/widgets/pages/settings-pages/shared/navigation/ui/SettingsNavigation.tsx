import { FC } from 'react';
import { SettingsNavigationGroup } from '../components/settings-navigation-group';
import { settingsUrlGroups } from '../lib/settings-urls-groups.ts';
import styles from './SettingsNavigation.module.scss';

const SettingsNavigation: FC = () => {
	return (
		<nav className={styles.navigation}>
			<SettingsNavigationGroup title={'Настройки пользователя'} items={settingsUrlGroups.user} />
			<SettingsNavigationGroup title={'Настройки приложения'} items={settingsUrlGroups.application} />
		</nav>
	);
};

export { SettingsNavigation };
