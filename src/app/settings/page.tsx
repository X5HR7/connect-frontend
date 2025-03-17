import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `${APP_NAME} | Настройки`
};

const Page = () => {
	return <div>Settings</div>;
};

export default Page;
