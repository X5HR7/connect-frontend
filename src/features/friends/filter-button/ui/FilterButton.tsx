'use client';

import { getButtonTextByFilter } from '@features/friends/filter-button/lib/utils.ts';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { FC } from 'react';
import { IFilterButtonProps } from '../lib/filter-button.interface.ts';
import styles from './FilterButton.module.scss';

const FilterButton: FC<IFilterButtonProps> = ({ filter }) => {
	const { filter: currentFilter, setFilter } = useFriendsStore();

	const handleButtonClick = () => {
		setFilter(filter);
	};

	return (
		<button
			className={`${styles.button} ${filter === currentFilter ? styles.button_active : ''} ${filter === 'ADD' ? styles.button_add : ''}`}
			onClick={handleButtonClick}
		>
			{getButtonTextByFilter(filter)}
		</button>
	);
};

export { FilterButton };
