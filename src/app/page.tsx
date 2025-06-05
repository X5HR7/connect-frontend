import { Metadata } from 'next';
import { HomePage } from '@pages/home-page';
import { APP_NAME } from '@shared/libs/utils/constants.ts';

export const metadata: Metadata = {
	title: `${APP_NAME} | Главная`
};

const Page = () => {
	return <HomePage />;
};

export default Page;
