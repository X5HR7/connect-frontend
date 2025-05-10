import Image from 'next/image';
import { FC } from 'react';
import friendsIcon from '@shared/assets/icons/friend.svg';
import { FilterButton } from '../components/filter-button';
import styles from './TopPanel.module.scss';

const TopPanel: FC = () => {
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
