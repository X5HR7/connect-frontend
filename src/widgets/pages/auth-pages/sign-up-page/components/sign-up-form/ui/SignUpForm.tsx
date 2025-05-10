'use client';

import {
	emailRegex,
	invalidEmailAddressMessage,
	invalidUsernameMessage,
	maxLength,
	minLength,
	requiredFieldErrorMessage,
	usernameRegex
} from '@shared/libs/utils/auth.constants.ts';
import { urls } from '@shared/libs/utils/url.config.ts';
import { AuthForm } from '@shared/ui/auth';
import { FormItem } from '@shared/ui/form/form-item';
import { SubmitButton } from '@shared/ui/form/submit-button';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpForm } from '../lib/form.interface.ts';
import { useRegister } from '../lib/use-register.ts';

const SignUpForm = () => {
	const { formState, register, handleSubmit, setError, reset } = useForm<ISignUpForm>({
		mode: 'onChange'
	});

	const { mutate: registerFn, isPending } = useRegister();
	const router = useRouter();

	const onSubmit: SubmitHandler<ISignUpForm> = data => {
		registerFn(data, {
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
				title={'Отображаемое имя'}
				required={false}
				register={register('displayName', {
					minLength: minLength(3),
					maxLength: maxLength(15)
				})}
				description={'Это имя увидят другие пользователи. Можно добавлять специальные символы.'}
				error={formState.errors.displayName?.message}
			/>
			<FormItem
				title={'Имя пользователя'}
				required={true}
				register={register('username', {
					required: requiredFieldErrorMessage,
					minLength: minLength(5),
					maxLength: maxLength(15),
					pattern: {
						value: usernameRegex,
						message: invalidUsernameMessage
					}
				})}
				description={'Используйте только буквы, цифры, нижнее подчеркивание и точки.'}
				error={formState.errors.username?.message}
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
			<SubmitButton text={'Зарегистироваться'} disabled={!formState.isValid || isPending} isLoading={isPending} />
		</AuthForm>
	);
};

export { SignUpForm };
