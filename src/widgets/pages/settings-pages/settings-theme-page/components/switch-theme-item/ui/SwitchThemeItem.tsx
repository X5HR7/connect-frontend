'use client';

import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import { Tooltip } from '@shared/ui/tooltip';
import { SwitchThemeItemProps } from '../lib/switch-theme-item.interface.ts';
import styles from './SwitchThemeItem.module.scss';

const SwitchThemeItem: FC<SwitchThemeItemProps> = ({ theme }) => {
	const [isCurrentTheme, setIsCurrentTheme] = useState<boolean>(false);
	const { theme: currentTheme, setTheme } = useTheme();

	useEffect(() => {
		if (currentTheme === theme.value) {
			setIsCurrentTheme(true);
		} else {
			setIsCurrentTheme(false);
		}
	}, [currentTheme]);

	const handleThemeChange = () => {
		setTheme(theme.value);
	};

	return (
		<Tooltip text={theme.title} position={'top'}>
			<button
				className={`${styles.item} ${isCurrentTheme ? styles.item_active : ''}`}
				onClick={handleThemeChange}
				disabled={isCurrentTheme}
				style={{ backgroundColor: theme.color }}
			/>
		</Tooltip>
	);
};

export { SwitchThemeItem };
