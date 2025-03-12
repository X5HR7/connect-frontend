import { ITopPanel } from '@features/friends/top-panel/lib/top-panel.interface.ts';
import friendsIcon from '@shared/assets/icons/friend.svg';
import Image from 'next/image';
import { FC } from 'react';
import styles from './TopPanel.module.scss';

const TopPanel: FC<ITopPanel> = ({ filter, setFilter }) => {
	const handleAllButtonClick = () => {
		setFilter('ALL');
	};

	const handleOnlineButtonClick = () => {
		setFilter('ONLINE');
	};

	const handlePendingButtonClick = () => {
		setFilter('PENDING');
	};

	const handleAddToFriendButtonClick = () => {};

	return (
		<div className={styles.panel}>
			<div className={styles.panel__friends}>
				<Image src={friendsIcon} alt='friends' className={styles['panel__friends-image']} />
				<p className={styles['panel__friends-text']}>Друзья</p>
			</div>
			<div className={styles.panel__buttons}>
				<button
					className={`${styles['panel__buttons-online']} ${filter === 'ONLINE' ? styles.panel__buttons_active : ''}`}
					onClick={handleOnlineButtonClick}
				>
					В сети
				</button>
				<button
					className={`${styles['panel__buttons-all']} ${filter === 'ALL' ? styles.panel__buttons_active : ''}`}
					onClick={handleAllButtonClick}
				>
					Все
				</button>
				<button
					className={`${styles['panel__buttons-pending']} ${filter === 'PENDING' ? styles.panel__buttons_active : ''}`}
					onClick={handlePendingButtonClick}
				>
					Ожидание
				</button>
				<button className={styles['panel__buttons-add']} onClick={handleAddToFriendButtonClick}>
					Добавить в друзья
				</button>
			</div>
		</div>
	);
};

export { TopPanel };
