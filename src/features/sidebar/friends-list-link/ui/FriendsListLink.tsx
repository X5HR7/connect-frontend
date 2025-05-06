'use client';

import friendsIcon from '@shared/assets/icons/friend.svg';
import { urls } from '@shared/libs/utils/url.config.ts';
import { NavLink } from '@shared/ui/nav-link/NavLink.tsx';
import { FriendRequestsReceivedIndicator } from '@shared/ui/user/friend-requests-received-indicator/FriendRequestsReceivedIndicator.tsx';
import Image from 'next/image';
import { FC } from 'react';
import styles from './FriendsListLink.module.scss';

const FriendsListLink: FC = () => {
	return (
		<NavLink href={urls.FRIENDS} className={styles.link} activeClassName={styles.link_active}>
			<button className={styles.link__button}>
				<Image src={friendsIcon} alt={'Друзья'} className={styles['link__button-icon']} />
				<span className={styles['link__button-text']}>Друзья</span>
				<div className={styles['link__button-indicator']}>
					<FriendRequestsReceivedIndicator />
				</div>
			</button>
		</NavLink>
	);
};

export { FriendsListLink };
