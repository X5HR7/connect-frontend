'use client';

import { getSecureEmail } from '@shared/libs/utils/getSecureData.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useModalStore } from '@shared/store/modalStore.ts';
import { AccountItem } from '@shared/ui/settings/account-item/AccountItem.tsx';
import { EditButton } from '@shared/ui/settings/edit-button/EditButton.tsx';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';

const EditEmailModal = dynamic(() => import('@entities/settings/edit-email-modal'));

const EditEmailItem: FC = () => {
	const { user } = useAuthStore();
	const { openModal } = useModalStore();
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
