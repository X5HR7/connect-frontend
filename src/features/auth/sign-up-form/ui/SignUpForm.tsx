'use client';

import { FormItem } from '@entities/auth/form-item';
import {
	emailRegex,
	invalidEmailAddress,
	maxLength,
	minLength,
	requiredFieldErrorMessage
} from '@entities/auth/form-item/lib/constants.ts';
import { ISignUpForm } from '@features/auth/sign-up-form';
import { AuthForm, SubmitButton } from '@shared/ui/auth';
import { SubmitHandler, useForm } from 'react-hook-form';

const SignUpForm = () => {
	const { formState, register, handleSubmit } = useForm<ISignUpForm>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<ISignUpForm> = data => {
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
						message: invalidEmailAddress
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
					maxLength: maxLength(15)
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
			<SubmitButton text={'Зарегистироваться'} disabled={!formState.isValid} />
		</AuthForm>
	);
};

export { SignUpForm };
