'use client';

import Link from 'next/link';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthStore } from '@entities/user';
import { IUserWithProfile } from '@shared/libs/interfaces';
import {
	invalidUsernameMessage,
	maxLength,
	minLength,
	requiredFieldErrorMessage,
	usernameRegex
} from '@shared/libs/utils/auth.constants.ts';
import { urls } from '@shared/libs/utils/url.config.ts';
import { useModalStore } from '@shared/store';
import { FormItem } from '@shared/ui/form';
import { Loader } from '@shared/ui/loader';
import { Avatar } from '@shared/ui/user';
import { IForm } from '../lib/form.interface.ts';
import { useFindUsers } from '../lib/use-find-users.ts';
import styles from './FindUserModal.module.scss';

const FindUserModal: FC = () => {
	const user = useAuthStore(state => state.user);
	const closeModal = useModalStore(state => state.closeModal);
	const [users, setUsers] = useState<IUserWithProfile[] | null>(null);
	const { mutate: findUsers, isPending } = useFindUsers();

	const { formState, register, handleSubmit } = useForm<IForm>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<IForm> = data => {
		findUsers(data.username, {
			onSuccess: data => {
				if (data?.length) {
					setUsers(data.filter(item => item.id !== user?.id));
				} else {
					setUsers([]);
				}
			},
			onError: () => {
				setUsers(null);
			}
		});
	};

	const handleLinkClick = () => {
		closeModal();
	};

	return (
		<div className={styles.modal}>
			<h2 className={styles.modal__title}>Поиск пользователей</h2>
			<p className={styles.modal__subtitle}>Для поиска введите имя пользователя</p>
			<form className={styles.modal__form} onSubmit={handleSubmit(onSubmit)}>
				<FormItem
					title={'Имя пользователя'}
					required={true}
					register={register('username', {
						required: requiredFieldErrorMessage,
						minLength: minLength(3),
						maxLength: maxLength(20),
						pattern: {
							value: usernameRegex,
							message: invalidUsernameMessage
						}
					})}
					description={'Используйте только буквы, цифры, нижнее подчеркивание и точки.'}
					error={formState.errors.username?.message}
				/>
				<button type={'submit'} className={styles.modal__button} disabled={!formState.isValid || isPending}>
					Найти пользователей
				</button>
			</form>
			{isPending ? (
				<div className={styles.modal__loader}>
					<Loader size={40} borderWidth={3} />
				</div>
			) : (
				<ul className={styles.modal__results}>
					{users &&
						users?.length > 0 &&
						users.map(user => (
							<li key={user.id} className={styles['modal__results-item']}>
								<Link
									href={urls.CHAT(user.id)}
									className={styles['modal__results-item-link']}
									onClick={handleLinkClick}
								>
									<Avatar profile={user.profile} statusStyles={styles['modal__results-item-link-status']} />
									<p className={styles['modal__results-item-link-name']}>{user.profile.displayName || user.username}</p>
								</Link>
							</li>
						))}
					{users !== null && users?.length < 1 && (
						<p className={styles['modal__not-found']}>Не найдено ни одного пользователя по заданным параметрам.</p>
					)}
				</ul>
			)}
		</div>
	);
};

export { FindUserModal };
