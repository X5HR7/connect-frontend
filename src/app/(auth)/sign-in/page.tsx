import { Metadata } from 'next';
import { SignInPage } from '@pages/auth-pages/sign-in-page';
import { APP_NAME } from '@shared/libs/utils/constants.ts';

export const metadata: Metadata = {
	title: `${APP_NAME} | Авторизация`
};

const Page = () => {
	return <SignInPage />;
};

export default Page;
