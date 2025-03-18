import { FindUserButton } from '@features/sidebar/find-user-button';
import { UserChats } from '@features/sidebar/user-chats';
import friendsIcon from '@shared/assets/icons/friend.svg';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import Image from 'next/image';
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
					<div className={styles['sidebar__content-buttons']}>
						<button className={`${styles['sidebar__content-button']} ${styles['sidebar__content-button_active']}`}>
							<Image src={friendsIcon} alt={'Друзья'} className={styles['sidebar__content-button-icon']} />
							<span className={styles['sidebar__content-button-text']}>Друзья</span>
						</button>
					</div>
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
