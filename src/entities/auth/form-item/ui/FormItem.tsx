'use client';

import { IFormItem } from '@entities/auth/form-item/lib/form-item.interface.ts';
import { FC } from 'react';
import styles from './FormItem.module.scss';

const FormItem: FC<IFormItem> = ({ title, type = 'text', required = false, description, register, error }) => {
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
