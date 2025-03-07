import { SignUpForm } from '@features/auth/sign-up-form';
import { AuthLink, PageTitle } from '@shared/ui/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Connect | Регистрация'
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
