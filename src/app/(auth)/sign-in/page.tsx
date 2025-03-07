import { SignInForm } from '@features/auth/sign-in-form';
import { AuthLink, PageTitle } from '@shared/ui/auth';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Connect | Авторизация'
};

const SignInPage = () => {
	return (
		<>
			<PageTitle text={'С возвращением!'} />
			<SignInForm />
			<AuthLink href={'/sign-up'} text={'Нет учетной записи? Зарегистрироваться.'} />
		</>
	);
};

export default SignInPage;
