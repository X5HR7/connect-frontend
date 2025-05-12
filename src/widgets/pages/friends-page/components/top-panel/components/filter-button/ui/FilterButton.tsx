'use client';

import { FC } from 'react';
import { useShallow } from 'zustand/shallow';
import { useFriendsStore } from '@entities/friend';
import { FriendRequestsReceivedIndicator } from '@shared/ui/user/friend-requests-received-indicator/FriendRequestsReceivedIndicator.tsx';
import { FilterButtonProps } from '../lib/filter-button.interface.ts';
import { getButtonTextByFilter } from '../lib/utils.ts';
import styles from './FilterButton.module.scss';

const FilterButton: FC<FilterButtonProps> = ({ filter }) => {
	const { filter: currentFilter, setFilter } = useFriendsStore(
		useShallow(state => ({
			filter: state.filter,
			setFilter: state.setFilter
		}))
	);

	const handleButtonClick = () => {
		setFilter(filter);
	};

	return (
		<button
			className={`${styles.button} ${filter === currentFilter ? styles.button_active : ''} ${filter === 'ADD' ? styles.button_add : ''}`}
			onClick={handleButtonClick}
		>
			<span>{getButtonTextByFilter(filter)}</span>
			{filter === 'ADD' ? (
				<div className={styles.button__indicator}>
					<FriendRequestsReceivedIndicator size={18} fontSize={12} />
				</div>
			) : null}
		</button>
	);
};

export { FilterButton };
