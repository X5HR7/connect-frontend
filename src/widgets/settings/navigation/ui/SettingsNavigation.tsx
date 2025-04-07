import { SettingsNavigationGroup } from '@features/settings/settings-navigation-group';
import { settingsUrlGroups } from '@widgets/settings/navigation/lib/settings-urls-groups.ts';
import { FC } from 'react';
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
