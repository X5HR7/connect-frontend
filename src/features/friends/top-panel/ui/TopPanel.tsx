import { ITopPanel } from '@features/friends/top-panel/lib/top-panel.interface.ts';
import friendsIcon from '@shared/assets/icons/friend.svg';
import { TFriendsStatus } from '@shared/libs/interfaces/pages.inteface.ts';
import Image from 'next/image';
import { FC } from 'react';
import styles from './TopPanel.module.scss';

const TopPanel: FC<ITopPanel> = ({ filter, setFilter }) => {
	const handleStatusButtonClick = (status: TFriendsStatus) => {
		setFilter(status);
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
					onClick={() => handleStatusButtonClick('ONLINE')}
				>
					В сети
				</button>
				<button
					className={`${styles['panel__buttons-all']} ${filter === 'ALL' ? styles.panel__buttons_active : ''}`}
					onClick={() => handleStatusButtonClick('ALL')}
				>
					Все
				</button>
				<button
					className={`${styles['panel__buttons-pending']} ${filter === 'PENDING' ? styles.panel__buttons_active : ''}`}
					onClick={() => handleStatusButtonClick('PENDING')}
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
