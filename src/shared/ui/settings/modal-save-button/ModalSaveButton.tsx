import { FC } from 'react';
import styles from './ModalSaveButton.module.scss';

interface IModalSaveButtonProps {
	disabled?: boolean;
}

const ModalSaveButton: FC<IModalSaveButtonProps> = ({ disabled }) => {
	return (
		<button type={'submit'} className={styles.button} disabled={disabled}>
			Сохранить
		</button>
	);
};

export { ModalSaveButton };
