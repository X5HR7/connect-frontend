'use client';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
	emailRegex,
	invalidEmailAddressMessage,
	minLength,
	requiredFieldErrorMessage
} from '@shared/libs/utils/auth.constants.ts';
import { urls } from '@shared/libs/utils/url.config.ts';
import { AuthForm } from '@shared/ui/auth';
import { FormItem, SubmitButton } from '@shared/ui/form';
import { ISignInForm } from '../lib/form.interface.ts';
import { useLogin } from '../lib/use-login.ts';

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
