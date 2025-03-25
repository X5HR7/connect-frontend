'use client';

import { FormItem } from '@entities/auth/form-item';
import {
	httpsUrlRegex,
	invalidUrlMessage,
	maxLength,
	minLength,
	requiredFieldErrorMessage
} from '@entities/auth/form-item/lib/constants.ts';
import { ICreateServerForm } from '@entities/form/create-server-form/lib/create-server-form.interface.ts';
import { useCreateServer } from '@entities/form/create-server-form/lib/useCreateServer.ts';
import { urls } from '@shared/libs/utils/url.config.ts';
import { useModalStore } from '@shared/store/modalStore.ts';
import { useServersStore } from '@shared/store/serversStore.ts';
import { Loader } from '@shared/ui/loader/Loader.tsx';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './CreateServerForm.module.scss';

const CreateServerForm: FC = () => {
	const { addServer } = useServersStore();
	const { closeModal } = useModalStore();
	const { formState, register, handleSubmit } = useForm<ICreateServerForm>({ mode: 'onChange' });
	const { mutate: createServer, isPending } = useCreateServer();
	const router = useRouter();

	const onSubmit: SubmitHandler<ICreateServerForm> = data => {
		createServer(data.image ? data : { name: data.name }, {
			onSuccess: serverResponse => {
				const { roles, serverCategories, serverMembers, ...server } = serverResponse;

				if (server?.id) {
					addServer(server);
					closeModal();
					router.push(urls.SERVER(server.id));
				}
			}
		});
	};

	return (
		<div className={styles.content}>
			<h2 className={styles.content__title}>Персонализируйте свой сервер</h2>
			<p className={styles.content__subtitle}>
				Персонализируйте свой новый сервер, выбрав ему название и значок. Их можно будет изменить в любой момент.
			</p>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.form__inputs}>
					<FormItem
						title={'Название сервера'}
						error={formState.errors.name?.message}
						required={true}
						type={'text'}
						register={register('name', {
							required: requiredFieldErrorMessage,
							minLength: minLength(5),
							maxLength: maxLength(20)
						})}
					/>
					<FormItem
						title={'Иконка сервера'}
						error={formState.errors.image?.message}
						required={false}
						type={'text'}
						register={register('image', {
							pattern: {
								value: httpsUrlRegex,
								message: invalidUrlMessage
							}
						})}
					/>
				</div>
				<div className={styles.form__buttons}>
					<button className={styles.form__button} type={'submit'} disabled={!formState.isValid || isPending}>
						{isPending ? <Loader size={10} /> : 'Создать'}
					</button>
				</div>
			</form>
		</div>
	);
};

export { CreateServerForm };
