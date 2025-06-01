'use client';

import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { useAuthStore } from '@entities/user';
import { getSecurePhone } from '@shared/libs/utils/get-secure-data.ts';
import { useModalStore } from '@shared/store/modalStore.ts';
import { AccountItem, EditButton } from '@shared/ui/settings';

const EditPhoneModal = dynamic(() => import('../components/edit-phone-modal'));

const EditPhoneItem: FC = () => {
	const user = useAuthStore(state => state.user);
	const openModal = useModalStore(state => state.openModal);
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
