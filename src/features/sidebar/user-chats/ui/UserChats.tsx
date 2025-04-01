'use client';

import { useChats } from '@features/sidebar/user-chats/lib/useChats.ts';
import { IChat } from '@shared/libs/interfaces';
import { urls } from '@shared/libs/utils/url.config.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { Loader } from '@shared/ui/loader/Loader.tsx';
import { NavLink } from '@shared/ui/nav-link/NavLink.tsx';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import React, { FC, useEffect, useState } from 'react';
import styles from './UserChats.module.scss';

const UserChats: FC = () => {
	const { user } = useAuthStore();
	const { data: chatsList, isPending } = useChats();

	const [chats, setChats] = useState<IChat[]>([]);

	useEffect(() => {
		if (chatsList && !isPending) {
			setChats(chatsList);
		}
	}, [chatsList, isPending]);

	const handleDeleteChat = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, chatId: string) => {
		event.preventDefault();
		event.stopPropagation();

		setChats(prev => prev.filter(chat => chat.id !== chatId));
	};

	return isPending ? (
		<Loader size={20} />
	) : (
		<ul className={styles.chats}>
			{chats.length === 0
				? null
				: chats.map(chat => {
						const friend = chat.chatMembers.filter(member => member.memberId !== user?.id)[0].member;
						if (!friend || !friend.profile) return null;

						return (
							<li className={styles.chats__item} key={chat.id}>
								<NavLink
									href={urls.CHAT(friend.id)}
									className={styles['chats__item-content']}
									activeClassName={styles['chats__item-content_active']}
								>
									<div className={styles['chats__item-content-wrapper']}>
										<Avatar profile={friend.profile} statusStyles={styles['chats__item-content-status']} />
										<p className={styles['chats__item-content-username']}>
											{friend.profile.displayName || friend.username}
										</p>
									</div>
									<button
										type={'button'}
										className={styles['chats__item-content-button']}
										onClick={event => handleDeleteChat(event, chat.id)}
									>
										+
									</button>
								</NavLink>
							</li>
						);
					})}
		</ul>
	);
};

export { UserChats };
