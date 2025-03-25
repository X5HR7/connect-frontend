import plusIcon from '@shared/assets/icons/icons8-plus.svg';
import { useModalStore } from '@shared/store/modalStore.ts';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC } from 'react';
import styles from './CreateServerButton.module.scss';

const CreateServerForm = dynamic(() => import('@entities/form/create-server-form'));

const CreateServerButton: FC = () => {
	const { openModal } = useModalStore();

	const handleButtonClick = () => {
		openModal(<CreateServerForm />);
	};

	return (
		<button type={'button'} onClick={handleButtonClick} className={styles.button}>
			<Image src={plusIcon} alt={'plus'} className={styles.button__icon} />
		</button>
	);
};

export { CreateServerButton };
