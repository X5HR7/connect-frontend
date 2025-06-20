'use client';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthStore } from '@entities/user';
import {
	emailRegex,
	invalidEmailAddressMessage,
	minLength,
	requiredFieldErrorMessage
} from '@shared/libs/utils/auth.constants.ts';
import { modalService } from '@shared/services';
import { FormItem } from '@shared/ui/form';
import { Modal, ModalBackButton, ModalSaveButton } from '@shared/ui/settings';
import { IEditEmailForm } from '../lib/edit-email-form.interface.ts';
import { useUpdateEmail } from '../lib/use-update-email.ts';
import styles from './EditEmailModal.module.scss';

const EditEmailModal: FC = () => {
	const user = useAuthStore(state => state.user);
	const { mutate: updateEmail, isPending } = useUpdateEmail();

	const { formState, register, handleSubmit, setError } = useForm<IEditEmailForm>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<IEditEmailForm> = data => {
		updateEmail(data, {
			onSuccess: user => {
				if (user?.id) {
					modalService.close();
				}
			},
			onError: () => {
				setError('email', { message: 'Неправильная почта или пароль' });
				setError('password', { message: 'Неправильная почта или пароль' });
			}
		});
	};

	return (
		<Modal title={'Измените электронную почту'}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<FormItem
					title={'Адрес электронной почты'}
					type={'email'}
					description={'Введите новый адрес электронной почты'}
					required={true}
					register={register('email', {
						required: requiredFieldErrorMessage,
						pattern: {
							value: emailRegex,
							message: invalidEmailAddressMessage
						},
						value: user?.email
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
				<div className={styles.form__buttons}>
					<ModalBackButton />
					<ModalSaveButton disabled={!formState.isValid || isPending} />
				</div>
			</form>
		</Modal>
	);
};

export { EditEmailModal };
