import { IFriendListItem } from '@entities/friends/friend-list-item/lib/friend-list-item.interface.ts';
import chatIcon from '@shared/assets/icons/chat.svg';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import Image from 'next/image';
import { FC } from 'react';
import styles from './FriendListItem.module.scss';

const FriendListItem: FC<IFriendListItem> = ({ friend }) => {
	return (
		<li className={styles.friend}>
			<div className={styles.friend__content}>
				<div className={styles.friend__info}>
					<Avatar profile={friend.profile} size={32} statusStyles={styles['friend__info-status']} />
					<p className={styles['friend__info-username']}>{friend.profile.displayName || friend.username}</p>
				</div>
				<div className={styles.friend__buttons}>
					<button className={styles['friend__buttons-button']}>
						<Tooltip text={'Сообщение'} position={'top'}>
							<Image src={chatIcon} alt='chat' className={styles['friend__buttons-button-icon']} />
						</Tooltip>
					</button>
					<button className={styles['friend__buttons-button']}>
						<Tooltip text={'Ещё'} position={'top'}>
							<p className={styles['friend__buttons-button_more']}>...</p>
						</Tooltip>
					</button>
				</div>
			</div>
		</li>
	);
};

export { FriendListItem };
