'use client';

import { SynchronizeIcon } from '@shared/ui/svg/SynchronizeIcon.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import styles from './SynchronizeThemeItem.module.scss';

const SynchronizeThemeItem: FC = () => {
	const [isSync, setIsSync] = useState<boolean>(false);
	const { setTheme, systemTheme, theme } = useTheme();

	useEffect(() => {
		if (theme === systemTheme) {
			setIsSync(true);
		} else {
			setIsSync(false);
		}
	}, [theme, systemTheme]);

	const handleButtonClick = () => {
		if (systemTheme) {
			setTheme(systemTheme);
			setIsSync(true);
		}
	};

	return (
		<Tooltip text={isSync ? 'Синхронизировано с устройством' : 'Синхронизация с устройством'} position={'top'}>
			<button
				className={`${styles.item} ${isSync ? styles.item_active : ''}`}
				onClick={handleButtonClick}
				disabled={isSync}
			>
				<SynchronizeIcon className={styles.icon} itemClassName={styles.icon__item} />
			</button>
		</Tooltip>
	);
};

export { SynchronizeThemeItem };
