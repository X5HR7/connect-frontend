'use client';

import { FormItem } from '@entities/auth/form-item';
import {
	emailRegex,
	invalidEmailAddressMessage,
	minLength,
	requiredFieldErrorMessage
} from '@entities/auth/form-item/lib/constants.ts';
import { ISignInForm } from '@features/auth/sign-in-form/lib/form.interface.ts';
import { AuthForm, SubmitButton } from '@shared/ui/auth';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const SignInForm = () => {
	const { formState, register, handleSubmit } = useForm<ISignInForm>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<ISignInForm> = data => {
		console.log(data);
	};

	return (
		<AuthForm onSubmit={handleSubmit(onSubmit)}>
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
			<SubmitButton text={'Зарегистироваться'} disabled={!formState.isValid} />
		</AuthForm>
	);
};

export { SignInForm };
