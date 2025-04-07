'use client';

import { useAuthStore } from '@shared/store/authStore.ts';
import { useModalStore } from '@shared/store/modalStore.ts';
import { AccountItem } from '@shared/ui/settings/account-item/AccountItem.tsx';
import { EditButton } from '@shared/ui/settings/edit-button/EditButton.tsx';
import dynamic from 'next/dynamic';
import { FC } from 'react';

const EditUsernameModal = dynamic(() => import('@entities/settings/edit-username-modal'));

const EditUsernameItem: FC = () => {
	const { user } = useAuthStore();
	const { openModal } = useModalStore();

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
