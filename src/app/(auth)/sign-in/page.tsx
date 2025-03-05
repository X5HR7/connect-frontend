'use client';

import { SignInForm } from '@features/auth/sign-in-form';
import { AuthLink, PageTitle } from '@shared/ui/auth';
import React from 'react';

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
