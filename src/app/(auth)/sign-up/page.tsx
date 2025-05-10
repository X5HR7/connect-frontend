import { Metadata } from 'next';
import { SignUpPage } from '@pages/auth-pages/sign-up-page';
import { APP_NAME } from '@shared/libs/utils/constants.ts';

export const metadata: Metadata = {
	title: `${APP_NAME} | Регистрация`
};

const Page = () => {
	return <SignUpPage />;
};

export default Page;
