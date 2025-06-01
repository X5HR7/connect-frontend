'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useAuthStore } from '@entities/user';
import { urls } from '@shared/libs/utils/url.config.ts';
import { AccountItem, EditButton } from '@shared/ui/settings';

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
