import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `${APP_NAME} | Сервера`
};

const Page = () => {
	return <div>servers</div>;
};

export default Page;
