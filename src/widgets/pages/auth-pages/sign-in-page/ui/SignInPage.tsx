import { urls } from '@shared/libs/utils/url.config.ts';
import { AuthLink, PageTitle } from '@shared/ui/auth';
import { SignInForm } from '../components/sign-in-form';

const SignInPage = () => {
	return (
		<>
			<PageTitle text={'С возвращением!'} />
			<SignInForm />
			<AuthLink href={urls.SIGN_UP} text={'Нет учетной записи? Зарегистрироваться.'} />
		</>
	);
};

export { SignInPage };
