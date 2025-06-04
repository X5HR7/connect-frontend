import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useModalStore } from '@shared/store';
import { PlusIcon } from '@shared/ui/svg';
import styles from './CreateServerButton.module.scss';

const CreateServerForm = dynamic(() => import('../components/create-server-form'));

const CreateServerButton: FC = () => {
	const openModal = useModalStore(state => state.openModal);

	const handleButtonClick = () => {
		openModal(<CreateServerForm />);
	};

	return (
		<button type={'button'} onClick={handleButtonClick} className={styles.button}>
			<PlusIcon className={styles.button__icon} />
		</button>
	);
};

export { CreateServerButton };
