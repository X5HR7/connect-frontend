import plusIcon from '@shared/assets/icons/icons8-plus.svg';
import Image from 'next/image';
import { FC } from 'react';
import styles from './CreateServerButton.module.scss';

interface ICreateServerButtonProps {
	onClick: () => void;
}

const CreateServerButton: FC<ICreateServerButtonProps> = ({ onClick }) => {
	return (
		<button type={'button'} onClick={onClick} className={styles.button}>
			<Image src={plusIcon} alt={'plus'} className={styles.button__icon} />
		</button>
	);
};

export { CreateServerButton };
