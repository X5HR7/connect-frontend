import { FC } from 'react';
import { FriendIcon } from '@shared/ui/svg';
import { FilterButton } from '../components/filter-button';
import styles from './TopPanel.module.scss';

const TopPanel: FC = () => {
	return (
		<div className={styles.panel}>
			<div className={styles.panel__friends}>
				<FriendIcon className={styles['panel__friends-image']} itemClassName={styles['panel__friends-image-item']} />
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
