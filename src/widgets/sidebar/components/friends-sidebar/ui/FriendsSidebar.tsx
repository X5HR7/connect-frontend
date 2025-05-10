import { FC } from 'react';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { FindUserButton } from '../components/find-user-button';
import { FriendsListLink } from '../components/friends-list-link';
import { UserChats } from '../components/user-chats';
import styles from './FriendsSidebar.module.scss';

const FriendsSidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__header}>
				<FindUserButton />
			</div>
			<div className={styles.sidebar__content}>
				<Scroll width={4}>
					<FriendsListLink />
					<div className={styles['sidebar__content-chats']}>
						<p className={styles['sidebar__content-chats-header']}>Личные сообщения</p>
						<UserChats />
					</div>
				</Scroll>
			</div>
		</div>
	);
};

export { FriendsSidebar };
