import dynamic from 'next/dynamic';
import { FC } from 'react';
import { modalService } from '@shared/services';
import { PlusIcon } from '@shared/ui/svg';
import styles from './CreateServerButton.module.scss';

const CreateServerForm = dynamic(() => import('../components/create-server-form').then(mod => mod.CreateServerForm));

const CreateServerButton: FC = () => {
	const handleButtonClick = () => {
		modalService.openDefaultModal(<CreateServerForm />);
	};

	return (
		<button type={'button'} onClick={handleButtonClick} className={styles.button}>
			<PlusIcon className={styles.button__icon} />
		</button>
	);
};

export { CreateServerButton };
