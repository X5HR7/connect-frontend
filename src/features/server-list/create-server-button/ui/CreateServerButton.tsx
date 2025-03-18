import plusIcon from '@shared/assets/icons/icons8-plus.svg';
import { useModalStore } from '@shared/store/modalStore.ts';
import Image from 'next/image';
import { FC } from 'react';
import styles from './CreateServerButton.module.scss';

const CreateServerButton: FC = () => {
	const { openModal } = useModalStore();

	const handleButtonClick = () => {
		openModal(<div>opened</div>);
	};

	return (
		<button type={'button'} onClick={handleButtonClick} className={styles.button}>
			<Image src={plusIcon} alt={'plus'} className={styles.button__icon} />
		</button>
	);
};

export { CreateServerButton };
