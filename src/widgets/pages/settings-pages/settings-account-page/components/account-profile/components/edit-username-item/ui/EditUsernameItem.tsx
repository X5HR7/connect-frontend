'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useAuthStore } from '@entities/user';
import { useModalStore } from '@shared/store/modalStore.ts';
import { AccountItem } from '@shared/ui/settings/account-item/AccountItem.tsx';
import { EditButton } from '@shared/ui/settings/edit-button/EditButton.tsx';

const EditUsernameModal = dynamic(() => import('../components/edit-username-modal'));

const EditUsernameItem: FC = () => {
	const user = useAuthStore(state => state.user);
	const openModal = useModalStore(state => state.openModal);

	const handleEditButtonClick = () => {
		openModal(<EditUsernameModal />);
	};

	return (
		<AccountItem title={'Имя пользователя'} value={user?.username}>
			<EditButton onClick={handleEditButtonClick} />
		</AccountItem>
	);
};

export { EditUsernameItem };
