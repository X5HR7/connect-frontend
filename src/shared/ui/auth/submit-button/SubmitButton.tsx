import React, { FC } from 'react';
import styles from './SubmitButton.module.scss';

interface IProps {
	text: string;
	disabled?: boolean;
}

const SubmitButton: FC<IProps> = ({ text, disabled = true }) => {
	return (
		<button type={'submit'} className={styles.button} disabled={disabled}>
			{text}
		</button>
	);
};

export { SubmitButton };
