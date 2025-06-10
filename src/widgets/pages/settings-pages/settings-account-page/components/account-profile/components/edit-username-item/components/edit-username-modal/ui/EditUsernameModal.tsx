'use client';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
	invalidUsernameMessage,
	maxLength,
	minLength,
	requiredFieldErrorMessage,
	usernameRegex
} from '@shared/libs/utils/auth.constants.ts';
import { modalService } from '@shared/services';
import { FormItem } from '@shared/ui/form';
import { Modal, ModalBackButton, ModalSaveButton } from '@shared/ui/settings';
import { IEditUsernameForm } from '../lib/edit-username-form.interface.ts';
import { useUpdateUsername } from '../lib/use-update-username.ts';
import styles from './EditUsernameModal.module.scss';

const EditUsernameModal: FC = () => {
	const { mutate: updateUsername, isPending } = useUpdateUsername();

	const { formState, register, handleSubmit, setError } = useForm<IEditUsernameForm>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<IEditUsernameForm> = data => {
		updateUsername(data, {
			onSuccess: user => {
				if (user?.id) {
					modalService.close();
				}
			},
			onError: () => {
				setError('username', { message: 'Имя пользователя уже занято или неправильный пароль' });
				setError('password', { message: 'Имя пользователя уже занято или неправильный пароль' });
			}
		});
	};

	return (
		<Modal title={'Обновите имя пользователя'}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
					title={'Новый пароль'}
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

export { EditUsernameModal };
