import { FC } from 'react';
import { NavLink } from '@shared/ui/nav-link/NavLink.tsx';
import { SettingsNavigationGroupProps } from '../lib/settings-navigation-group.interface.ts';
import styles from './SettingsNavigationGroup.module.scss';

const SettingsNavigationGroup: FC<SettingsNavigationGroupProps> = ({ title, items }) => {
	return (
		<div className={styles.group}>
			<p className={styles.group__title}>{title}</p>
			<ul className={styles.group__list}>
				{items.map(item => (
					<li className={styles['group__list-item']} key={item.url}>
						<NavLink
							href={item.url}
							replace={true}
							exact={true}
							className={styles['group__list-link']}
							activeClassName={styles['group__list-link_active']}
						>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export { SettingsNavigationGroup };
