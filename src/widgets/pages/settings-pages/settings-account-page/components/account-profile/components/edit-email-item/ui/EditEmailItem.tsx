'use client';

import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { useAuthStore } from '@entities/user';
import { getSecureEmail } from '@shared/libs/utils/get-secure-data.ts';
import { modalService } from '@shared/services';
import { AccountItem, EditButton } from '@shared/ui/settings';

const EditEmailModal = dynamic(() => import('../components/edit-email-modal').then(mod => mod.EditEmailModal));

const EditEmailItem: FC = () => {
	const user = useAuthStore(state => state.user);
	const [isSecure, setIsSecure] = useState<boolean>(true);

	const handleEditButtonClick = () => {
		modalService.openDefaultModal(<EditEmailModal />);
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
