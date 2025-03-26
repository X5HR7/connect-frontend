import { FilterButton } from '@features/friends/filter-button';
import friendsIcon from '@shared/assets/icons/friend.svg';
import Image from 'next/image';
import { FC } from 'react';
import { ITopPanel } from '../lib/top-panel.interface.ts';
import styles from './TopPanel.module.scss';

const TopPanel: FC<ITopPanel> = () => {
	return (
		<div className={styles.panel}>
			<div className={styles.panel__friends}>
				<Image src={friendsIcon} alt='friends' className={styles['panel__friends-image']} />
				<p className={styles['panel__friends-text']}>Друзья</p>
			</div>
			<div className={styles.panel__buttons}>
				<FilterButton filter={'ONLINE'} />
				<FilterButton filter={'ALL'} />
				<FilterButton filter={'ADD'} />
			</div>
		</div>
	);
};

export { TopPanel };
