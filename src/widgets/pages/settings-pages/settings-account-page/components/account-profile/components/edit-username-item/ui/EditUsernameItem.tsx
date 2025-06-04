'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useAuthStore } from '@entities/user';
import { useModalStore } from '@shared/store';
import { AccountItem, EditButton } from '@shared/ui/settings';

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
