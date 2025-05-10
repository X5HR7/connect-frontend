'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { urls } from '@shared/libs/utils/url.config.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { AccountItem } from '@shared/ui/settings/account-item/AccountItem.tsx';
import { EditButton } from '@shared/ui/settings/edit-button/EditButton.tsx';

const EditDisplayNameItem: FC = () => {
	const user = useAuthStore(state => state.user);
	const router = useRouter();

	const handleEditButtonClick = () => {
		router.replace(urls.SETTINGS_PROFILE);
	};

	return (
		<AccountItem title={'Отображаемое имя'} value={user?.profile.displayName}>
			<EditButton onClick={handleEditButtonClick} />
		</AccountItem>
	);
};

export { EditDisplayNameItem };
