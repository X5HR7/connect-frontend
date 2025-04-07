import { FC } from 'react';
import styles from './EditButton.module.scss';

interface IEditButtonProps {
	onClick?: () => void;
}

const EditButton: FC<IEditButtonProps> = ({ onClick }) => {
	return (
		<button type={'button'} className={styles.button} onClick={onClick}>
			Изменить
		</button>
	);
};

export { EditButton };
