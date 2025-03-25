import { FindUserButton } from '@features/sidebar/find-user-button';
import FriendsListLink from '@features/sidebar/friends-list-link';
import { UserChats } from '@features/sidebar/user-chats';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { FC } from 'react';
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
