'use client';

import { getSecurePhone } from '@shared/libs/utils/getSecureData.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useModalStore } from '@shared/store/modalStore.ts';
import { AccountItem } from '@shared/ui/settings/account-item/AccountItem.tsx';
import { EditButton } from '@shared/ui/settings/edit-button/EditButton.tsx';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';

const EditPhoneModal = dynamic(() => import('@entities/settings/edit-phone-modal'));

const EditPhoneItem: FC = () => {
	const { user } = useAuthStore();
	const { openModal } = useModalStore();
	const [isSecure, setIsSecure] = useState<boolean>(true);

	const handleEditButtonClick = () => {
		openModal(<EditPhoneModal />);
	};

	const toggleValueState = () => {
		setIsSecure(prev => !prev);
	};

	return (
		<AccountItem
			title={'Номер телефона'}
			value={user?.phone && isSecure ? getSecurePhone(user.phone) : user?.phone}
			showFullValue={toggleValueState}
		>
			<EditButton onClick={handleEditButtonClick} />
		</AccountItem>
	);
};

export { EditPhoneItem };
