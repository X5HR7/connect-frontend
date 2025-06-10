'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useAuthStore } from '@entities/user';
import { modalService } from '@shared/services';
import { AccountItem, EditButton } from '@shared/ui/settings';

const EditUsernameModal = dynamic(() => import('../components/edit-username-modal').then(mod => mod.EditUsernameModal));

const EditUsernameItem: FC = () => {
	const user = useAuthStore(state => state.user);

	const handleEditButtonClick = () => {
		modalService.openDefaultModal(<EditUsernameModal />);
	};

	return (
		<AccountItem title={'Имя пользователя'} value={user?.username}>
			<EditButton onClick={handleEditButtonClick} />
		</AccountItem>
	);
};

export { EditUsernameItem };
