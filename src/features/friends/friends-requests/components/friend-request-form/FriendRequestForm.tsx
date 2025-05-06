'use client';

import { useSendFriendRequest } from '@entities/friends/add-to-friend-button/';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFriendsRequestForm } from '../../lib/friends-request-form.interface.ts';
import styles from './FriendRequestForm.module.scss';

const FriendRequestForm: FC = () => {
	const { formState, register, handleSubmit, setError, watch } = useForm<IFriendsRequestForm>({
		mode: 'onChange'
	});

	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const { mutate: sendRequest, isPending } = useSendFriendRequest();
	const { addSentRequest } = useFriendsStore();

	const usernameValue = watch('username');

	useEffect(() => {
		if (isSuccess) {
			setIsSuccess(false);
		}
	}, [usernameValue]);

	const handleFormSubmit: SubmitHandler<IFriendsRequestForm> = ({ username }) => {
		sendRequest(
			{ username },
			{
				onSuccess: request => {
					if (request?.id) {
						setIsSuccess(true);
						addSentRequest(request);
					}
				},
				onError: error => {
					setError('username', { message: error.message });
				}
			}
		);
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
				<input
					type='text'
					className={styles.form__input}
					placeholder={'Вы можете добавить друзей по имени пользователя.'}
					required={true}
					{...register('username', {
						minLength: { value: 5, message: 'Минимальная длина - 5 символов' },
						maxLength: { value: 20, message: 'Максимальная длина - 20 символов' },
						required: true
					})}
				/>
				<button type={'submit'} className={styles.form__button} disabled={!formState.isValid || isPending}>
					Отправить запрос дружбы
				</button>
			</form>
			{isSuccess && !formState.errors.username ? <p className={styles.message}>Запрос успешно отправлен!</p> : null}
			{!isSuccess || formState.errors.username ? (
				<p className={`${styles.message} ${formState.errors.username ? styles.message_error : ''}`}>
					{formState.errors.username?.message}
				</p>
			) : null}
		</>
	);
};

export { FriendRequestForm };
