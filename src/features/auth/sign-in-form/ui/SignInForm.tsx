'use client';

import { FormItem } from '@entities/auth/form-item';
import {
	emailRegex,
	invalidEmailAddressMessage,
	minLength,
	requiredFieldErrorMessage
} from '@entities/auth/form-item/lib/constants.ts';
import { ISignInForm } from '@features/auth/sign-in-form/lib/form.interface.ts';
import { useLogin } from '@features/auth/sign-in-form/lib/useLogin.ts';
import { urls } from '@shared/libs/utils/url.config.ts';
import { AuthForm, SubmitButton } from '@shared/ui/auth';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const SignInForm = () => {
	const { formState, register, handleSubmit, setError, reset } = useForm<ISignInForm>({
		mode: 'onChange'
	});

	const { mutate: login, isPending } = useLogin();
	const router = useRouter();

	const onSubmit: SubmitHandler<ISignInForm> = data => {
		login(data, {
			onSuccess: () => {
				router.replace(urls.FRIENDS);
				reset();
			},
			onError: error => {
				setError('root', { message: error.message });
			}
		});
	};

	return (
		<AuthForm onSubmit={handleSubmit(onSubmit)} error={formState.errors.root?.message}>
			<FormItem
				title={'Адрес электронной почты'}
				type={'email'}
				required={true}
				register={register('email', {
					required: requiredFieldErrorMessage,
					pattern: {
						value: emailRegex,
						message: invalidEmailAddressMessage
					}
				})}
				error={formState.errors.email?.message}
			/>
			<FormItem
				title={'Пароль'}
				type={'password'}
				required={true}
				register={register('password', {
					required: requiredFieldErrorMessage,
					minLength: minLength(5)
				})}
				error={formState.errors.password?.message}
			/>
			<SubmitButton text={'Войти'} disabled={!formState.isValid || isPending} isLoading={isPending} />
		</AuthForm>
	);
};

export { SignInForm };
