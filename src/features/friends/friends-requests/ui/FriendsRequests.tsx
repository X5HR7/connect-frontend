'use client';

import { FriendRequestItem } from '@entities/friends/friend-request-item';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFriendsRequestForm } from '../lib/friends-request-form.interface.ts';
import { useSendFriendRequest } from '../lib/use-send-friend-request.ts';
import styles from './FriendsRequests.module.scss';

const FriendsRequests: FC = () => {
	const { formState, register, handleSubmit, setError, watch } = useForm<IFriendsRequestForm>({
		mode: 'onChange'
	});

	const { mutate: sendRequest, isPending } = useSendFriendRequest();
	const { requests } = useFriendsStore();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

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
				onSuccess: () => {
					setIsSuccess(true);
				},
				onError: error => {
					setError('username', { message: error.message });
				}
			}
		);
	};

	return (
		<div className={styles.requests}>
			<div className={styles.request}>
				<h1 className={styles.request__title}>Добавить в друзья</h1>
				<p className={styles.request__subtitle}>Вы можете добавить друзей по имени пользователя (username).</p>
				<form onSubmit={handleSubmit(handleFormSubmit)} className={styles.request__form}>
					<input
						type='text'
						className={styles['request__form-input']}
						placeholder={'Вы можете добавить друзей по имени пользователя.'}
						required={true}
						{...register('username', {
							minLength: { value: 5, message: 'Минимальная длина - 5 символов' },
							maxLength: { value: 20, message: 'Максимальная длина - 20 символов' },
							required: true
						})}
					/>
					<button type={'submit'} className={styles['request__form-button']} disabled={!formState.isValid || isPending}>
						Отправить запрос дружбы
					</button>
				</form>
				{isSuccess && !formState.errors.username ? (
					<p className={`${styles.request__message}`}>Запрос успешно отправлен!</p>
				) : null}
				{!isSuccess || formState.errors.username ? (
					<p className={`${styles.request__message} ${formState.errors.username ? styles.request__message_error : ''}`}>
						{formState.errors.username?.message}
					</p>
				) : null}
			</div>
			<div className={styles.list}>
				<Scroll width={8}>
					<h2 className={styles.list__title}>Входящие запросы на добавление в друзья</h2>
					<ul className={styles.list__items}>
						{requests.map(request => (
							<FriendRequestItem key={request.id} request={request} />
						))}
					</ul>
					{requests.length > 0 ? null : (
						<p className={styles.list__empty}>На данный момент у вас нет входящих запросов на добавление в друзья.</p>
					)}
				</Scroll>
			</div>
		</div>
	);
};

export { FriendsRequests };
