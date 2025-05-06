'use client';

import { getButtonTextByFilter } from '@features/friends/filter-button/lib/utils.ts';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { FriendRequestsReceivedIndicator } from '@shared/ui/user/friend-requests-received-indicator/FriendRequestsReceivedIndicator.tsx';
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
