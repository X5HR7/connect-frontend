'use client';

import { FC } from 'react';
import { urls } from '@shared/libs/utils/url.config.ts';
import { NavLink } from '@shared/ui/nav-link';
import { FriendIcon } from '@shared/ui/svg';
import { FriendRequestsReceivedIndicator } from '@shared/ui/user';
import styles from './FriendsListLink.module.scss';

const FriendsListLink: FC = () => {
	return (
		<NavLink href={urls.FRIENDS} className={styles.link} activeClassName={styles.link_active}>
			<button className={styles.link__button}>
				<FriendIcon className={styles['link__button-icon']} itemClassName={styles['link__button-icon-item']} />
				<span className={styles['link__button-text']}>Друзья</span>
				<div className={styles['link__button-indicator']}>
					<FriendRequestsReceivedIndicator />
				</div>
			</button>
		</NavLink>
	);
};

export { FriendsListLink };
