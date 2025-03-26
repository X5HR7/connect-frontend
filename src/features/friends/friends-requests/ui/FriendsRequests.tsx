'use client';

import { FriendListItem } from '@entities/friends/friend-list-item';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFriendsRequestForm } from '../lib/friends-request-form.interface.ts';
import { useFetchSendFriendRequest } from '../lib/useFetchSendFriendRequest.ts';
import styles from './FriendsRequests.module.scss';

const FriendsRequests: FC = () => {
	const { formState, register, handleSubmit, setError } = useForm<IFriendsRequestForm>({ mode: 'onChange' });
	const { mutate: sendRequest, isPending, isSuccess } = useFetchSendFriendRequest();
	const { requests } = useFriendsStore();

	const handleFormSubmit: SubmitHandler<IFriendsRequestForm> = ({ username }) => {
		sendRequest(
			{ username },
			{
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
				{isSuccess && <p className={`${styles.request__message}`}>Запрос успешно отправлен!</p>}
				<p className={`${styles.request__message} ${formState.errors.username ? styles.request__message_error : ''}`}>
					{formState.errors.username?.message}
				</p>
			</div>
			<div className={styles.list}>
				<h2 className={styles.list__title}>Входящие запросы на добавление в друзья</h2>
				<Scroll width={8}>
					<ul className={styles.list__items}>
						{requests.map(request => (
							<FriendListItem key={request.id} friend={request.sender} />
						))}
					</ul>
				</Scroll>
			</div>
		</div>
	);
};

export { FriendsRequests };
