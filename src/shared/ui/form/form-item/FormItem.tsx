'use client';

import { FC } from 'react';
import styles from './FormItem.module.scss';

interface FormItemProps {
	title: string;
	type?: 'email' | 'password' | 'text';
	required?: boolean;
	description?: string;
	register?: any;
	error: string | undefined;
}

const FormItem: FC<FormItemProps> = ({ title, type = 'text', required = false, description, register, error }) => {
	return (
		<div className={styles.item}>
			<p className={`${styles.item__title} ${error ? styles.item__title_error : ''}`}>
				{title}
				{required && !error ? <span className={styles['item__title-sup']}>*</span> : ''}
				{error && <span className={styles['item__title-error']}>{` - ${error}`}</span>}
			</p>
			<input type={type} className={styles.item__input} {...register} />
			<p className={styles.item__description}>{description}</p>
		</div>
	);
};

export { FormItem };
