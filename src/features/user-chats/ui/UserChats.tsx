'use client';

import { useChats } from '@features/user-chats/lib/useChats.ts';
import profileIcon from '@shared/assets/icons/profile_avatar_temlate.png';
import { IChat } from '@shared/libs/interfaces';
import { useAuthStore } from '@shared/store/authStore.ts';
import { Loader } from '@shared/ui/loader/Loader.tsx';
import { NavLink } from '@shared/ui/nav-link/NavLink.tsx';
import Image from 'next/image';
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
									href={`/chats/${chat.id}`}
									className={styles['chats__item-content']}
									activeClassName={styles['chats__item-content_active']}
								>
									<div className={styles['chats__item-content-wrapper']}>
										<Image
											src={friend.profile.avatar || profileIcon}
											alt={'User avatar'}
											className={styles['chats__item-content-image']}
										/>
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
