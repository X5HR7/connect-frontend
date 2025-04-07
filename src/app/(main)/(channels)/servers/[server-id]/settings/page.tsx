import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `${APP_NAME} | Настройки сервера`
};

const ServerSettingsPage = () => {
	return <div>Server settings</div>;
};

export default ServerSettingsPage;
