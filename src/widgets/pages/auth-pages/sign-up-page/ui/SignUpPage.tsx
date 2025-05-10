import { urls } from '@shared/libs/utils/url.config.ts';
import { AuthLink, PageTitle } from '@shared/ui/auth';
import { SignUpForm } from '../components/sign-up-form';

const SignUpPage = () => {
	return (
		<>
			<PageTitle text={'Создать учетную запись'} />
			<SignUpForm />
			<AuthLink href={urls.SIGN_IN} text={'Уже зарегистрированы? Войти.'} />
		</>
	);
};

export { SignUpPage };
