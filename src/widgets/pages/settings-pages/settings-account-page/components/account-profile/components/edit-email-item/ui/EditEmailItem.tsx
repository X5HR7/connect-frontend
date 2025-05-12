'use client';

import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { useAuthStore } from '@entities/user';
import { getSecureEmail } from '@shared/libs/utils/get-secure-data.ts';
import { useModalStore } from '@shared/store/modalStore.ts';
import { AccountItem } from '@shared/ui/settings/account-item/AccountItem.tsx';
import { EditButton } from '@shared/ui/settings/edit-button/EditButton.tsx';

const EditEmailModal = dynamic(() => import('../components/edit-email-modal'));

const EditEmailItem: FC = () => {
	const user = useAuthStore(state => state.user);
	const openModal = useModalStore(state => state.openModal);
	const [isSecure, setIsSecure] = useState<boolean>(true);

	const handleEditButtonClick = () => {
		openModal(<EditEmailModal />);
	};

	const toggleValueState = () => {
		setIsSecure(prev => !prev);
	};

	return (
		<AccountItem
			title={'Электронная почта'}
			value={user?.email && isSecure ? getSecureEmail(user.email) : user?.email}
			showFullValue={toggleValueState}
		>
			<EditButton onClick={handleEditButtonClick} />
		</AccountItem>
	);
};

export { EditEmailItem };
