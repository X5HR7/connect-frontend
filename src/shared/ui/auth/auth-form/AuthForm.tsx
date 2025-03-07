import React, { FC, FormEventHandler, ReactNode } from 'react';
import styles from './AuthForm.module.scss';

interface IProps {
	onSubmit: FormEventHandler<HTMLFormElement>;
	error?: string | undefined;
	children: ReactNode;
}

const AuthForm: FC<IProps> = ({ children, onSubmit, error }) => {
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			{children}
			{error ? <p className={styles.form__error}>Ошибка: {error}</p> : null}
		</form>
	);
};

export { AuthForm };
