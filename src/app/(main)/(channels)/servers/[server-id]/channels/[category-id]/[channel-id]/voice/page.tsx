import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `${APP_NAME} | Канал сервера`
};

const ServerChannelPage = () => {
	return <div>Voice channel page</div>;
};

export default ServerChannelPage;
