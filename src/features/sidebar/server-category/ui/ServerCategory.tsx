'use client';

import { IServerCategoryProps } from '@features/sidebar/server-category/lib/server-category.ts';
import arrowIcon from '@shared/assets/icons/open.svg';
import settingsIcon from '@shared/assets/icons/settings.svg';
import Image from 'next/image';
import { FC, useState } from 'react';
import styles from './ServerCategory.module.scss';

const ServerCategory: FC<IServerCategoryProps> = ({ category, children }) => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

	const toggleCollapse = () => {
		setIsCollapsed(prev => !prev);
	};

	const handleSettingsClick = () => {};

	return (
		<div className={styles.category}>
			<div className={styles.category__header} onClick={toggleCollapse}>
				<div>
					<Image
						src={arrowIcon}
						alt='arrow'
						className={`${styles['category__header-icon']} ${isCollapsed ? styles['category__header-icon_closed'] : ''}`}
					/>
					<span>{category.name}</span>
				</div>
				<Image src={settingsIcon} alt='settings' className={styles.category__settings} />
			</div>
			<div className={`${styles.category__channels} ${isCollapsed ? styles.category__channels_collapsed : ''}`}>
				{children}
			</div>
		</div>
	);
};

export { ServerCategory };
