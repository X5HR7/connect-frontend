'use client';

import { FormItem } from '@entities/auth/form-item';
import { ProfileDemo } from '@features/settings/profile-demo';
import { IUpdateUserProfile } from '@shared/libs/api/user/user.ts';
import { httpsUrlRegex, invalidUrlMessage, maxLength, minLength } from '@shared/libs/utils/auth.constants.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { SubmitButton } from '@shared/ui/auth';
import { useUpdateProfile } from '@widgets/settings/profile/lib/use-update-profile.ts';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProfileForm } from '../lib/form.interface.ts';
import styles from './Profile.module.scss';

const Profile: FC = () => {
	const { user, setUser } = useAuthStore();
	const { formState, register, handleSubmit, watch, reset } = useForm<ProfileForm>({
		mode: 'onChange'
	});

	const { mutate: updateProfile, isPending, isSuccess, isError } = useUpdateProfile();

	const displayName = watch('displayName');
	const description = watch('description');
	const avatar = watch('avatar');

	useEffect(() => {
		if (user) {
			reset(() => ({
				avatar: user.profile.avatar,
				displayName: user.profile.displayName,
				description: user.profile.description
			}));
		}
	}, [user]);

	const onSubmit: SubmitHandler<ProfileForm> = data => {
		if (data) {
			const newData: IUpdateUserProfile = {
				avatar: null,
				displayName: null,
				description: null
			};

			if (data.avatar) newData.avatar = data.avatar;
			if (data.displayName) newData.displayName = data.displayName;
			if (data.description) newData.description = data.description;

			updateProfile(newData, {
				onSuccess: data => {
					if (data?.id) {
						setUser(data);
					}
				}
			});
		}
	};

	return (
		<div className={styles.profile}>
			<form className={styles.profile__form} onSubmit={handleSubmit(onSubmit)}>
				<FormItem
					title={'Отображаемое имя'}
					error={formState.errors.displayName?.message}
					required={false}
					type={'text'}
					register={register('displayName', {
						value: user?.profile.displayName,
						minLength: minLength(5),
						maxLength: maxLength(20)
					})}
				/>
				<FormItem
					title={'Описание профиля'}
					error={formState.errors.description?.message}
					required={false}
					type={'text'}
					register={register('description', {
						value: user?.profile.description,
						minLength: minLength(2),
						maxLength: maxLength(100)
					})}
				/>
				<FormItem
					title={'Фото профиля'}
					error={formState.errors.avatar?.message}
					required={false}
					type={'text'}
					register={register('avatar', {
						pattern: {
							value: httpsUrlRegex,
							message: invalidUrlMessage
						},
						value: user?.profile.avatar
					})}
				/>
				<SubmitButton
					text={'Сохранить'}
					disabled={
						!formState.isValid ||
						(displayName === user?.profile.description &&
							description === user?.profile.description &&
							avatar === user?.profile.avatar)
					}
					isLoading={isPending}
				/>
				{isSuccess && <p className={styles['profile__form__success']}>Данные профиля успешно обновлены.</p>}
				{isError && (
					<p className={styles['profile__form__error']}>
						При обновлении данных профиля произошла ошибка. Проверьте корректность введенных данных или повторите
						попытку позже.
					</p>
				)}
			</form>
			<div className={styles.profile__demo}>
				<ProfileDemo displayName={displayName} description={description} />
			</div>
		</div>
	);
};

export { Profile };
