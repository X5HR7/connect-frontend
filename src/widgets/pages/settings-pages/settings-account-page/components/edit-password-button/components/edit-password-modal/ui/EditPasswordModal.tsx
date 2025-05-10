'use client';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { minLength, requiredFieldErrorMessage } from '@shared/libs/utils/auth.constants.ts';
import { useModalStore } from '@shared/store/modalStore.ts';
import { FormItem } from '@shared/ui/form/form-item';
import { ModalBackButton } from '@shared/ui/settings/modal-back-button/ModalBackButton.tsx';
import { ModalSaveButton } from '@shared/ui/settings/modal-save-button/ModalSaveButton.tsx';
import { Modal } from '@shared/ui/settings/modal/Modal.tsx';
import { IEditPasswordForm } from '../lib/edit-password-form.interface.ts';
import { useUpdatePassword } from '../lib/use-update-password.ts';
import styles from './EditPasswordModal.module.scss';

const EditPasswordModal: FC = () => {
	const closeModal = useModalStore(state => state.closeModal);
	const { mutate: updatePassword, isPending } = useUpdatePassword();

	const { formState, register, handleSubmit, setError } = useForm<IEditPasswordForm>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<IEditPasswordForm> = data => {
		updatePassword(data, {
			onSuccess: user => {
				if (user?.id) {
					closeModal();
				}
			},
			onError: () => {
				setError('password', { message: 'Некорреный текущий или новый пароль' });
				setError('newPassword', { message: 'Некорреный текущий или новый пароль' });
			}
		});
	};

	return (
		<Modal title={'Обновите пароль'}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<FormItem
					title={'Текущий пароль'}
					type={'password'}
					required={true}
					register={register('password', {
						required: requiredFieldErrorMessage,
						minLength: minLength(5)
					})}
					error={formState.errors.password?.message}
				/>
				<FormItem
					title={'Новый пароль'}
					type={'password'}
					required={true}
					register={register('newPassword', {
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

export { EditPasswordModal };
