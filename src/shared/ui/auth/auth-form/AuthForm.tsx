import React, { FC, FormEventHandler, ReactNode } from 'react';
import styles from './AuthForm.module.scss';

interface IProps {
	onSubmit: FormEventHandler<HTMLFormElement>;
	children: ReactNode;
}

const AuthForm: FC<IProps> = ({ children, onSubmit }) => {
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			{children}
		</form>
	);
};

export { AuthForm };
