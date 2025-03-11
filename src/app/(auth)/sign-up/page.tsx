import { SignUpForm } from '@features/auth/sign-up-form';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { AuthLink, PageTitle } from '@shared/ui/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `${APP_NAME} | Регистрация`
};

const SignUpPage = () => {
	return (
		<>
			<PageTitle text={'Создать учетную запись'} />
			<SignUpForm />
			<AuthLink href={'/sign-in'} text={'Уже зарегистрированы? Войти.'} />
		</>
	);
};

export default SignUpPage;
