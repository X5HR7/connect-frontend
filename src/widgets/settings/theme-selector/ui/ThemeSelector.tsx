'use client';

import { TThemeValue } from '@shared/libs/types';
import { useTheme } from 'next-themes';
import { FC } from 'react';
import styles from './ThemeSelector.module.scss';

const ThemeSelector: FC = () => {
	const { setTheme } = useTheme();

	const handleThemeChange = (theme: TThemeValue) => {
		setTheme(theme);
	};

	return (
		<ul className={styles.selector}>
			<button onClick={() => handleThemeChange('light')}>Светлая</button>
			<button onClick={() => handleThemeChange('dark')}>Темная</button>
		</ul>
	);
};

export { ThemeSelector };
