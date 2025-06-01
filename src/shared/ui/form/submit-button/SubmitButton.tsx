import React, { FC } from 'react';
import { Loader } from '@shared/ui/loader';
import styles from './SubmitButton.module.scss';

interface IProps {
	text: string;
	isLoading?: boolean;
	disabled?: boolean;
}

const SubmitButton: FC<IProps> = ({ text, disabled = true, isLoading = false }) => {
	return (
		<button type={'submit'} className={styles.button} disabled={disabled}>
			{!isLoading ? text : <Loader size={16} />}
		</button>
	);
};

export { SubmitButton };
