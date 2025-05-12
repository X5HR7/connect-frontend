import chatIcon from '@shared/assets/icons/chat.svg';
import { urls } from '@shared/libs/utils/url.config.ts';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IFriendListItem } from '../lib/friend-list-item.interface.ts';
import styles from './FriendListItem.module.scss';

const FriendListItem: FC<IFriendListItem> = ({ friend }) => {
	return (
		<li className={styles.friend}>
			<div className={styles.friend__content}>
				<div className={styles.friend__info}>
					<div className={styles['friend__info-avatar']}>
						<Avatar profile={friend.profile} size={32} statusStyles={styles['friend__info-avatar-status']} />
					</div>
					<p className={styles['friend__info-username']}>{friend.profile.displayName || friend.username}</p>
				</div>
				<div className={styles.friend__buttons}>
					<Tooltip text={'Сообщение'} position={'top'}>
						<Link href={urls.CHAT(friend.id)} className={styles['friend__buttons-button']}>
							<Image src={chatIcon} alt='chat' className={styles['friend__buttons-button-icon']} />
						</Link>
					</Tooltip>
					<Tooltip text={'Ещё'} position={'top'}>
						<button className={styles['friend__buttons-button']}>
							<p className={styles['friend__buttons-button_more']}>...</p>
						</button>
					</Tooltip>
				</div>
			</div>
		</li>
	);
};

export { FriendListItem };
