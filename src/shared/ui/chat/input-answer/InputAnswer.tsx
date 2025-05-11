import Image from 'next/image';
import { FC } from 'react';
import closeIcon from '@shared/assets/icons/close.svg';
import styles from './InputAnswer.module.scss';

interface InputAnswerProps {
	userName?: string;
	onClick?: () => void;
}

const InputAnswer: FC<InputAnswerProps> = ({ onClick, userName }) => {
	return (
		<div className={styles.answer}>
			<p className={styles.answer__user}>
				<span className={styles['answer__user-text']}>Ответ пользователю</span>
				<span className={styles['answer__user-name']}>@{userName || 'Пользователь не найден'}</span>
			</p>
			<button type={'button'} className={styles.answer__button} onClick={onClick}>
				<Image src={closeIcon} alt={'close'} className={styles.answer__icon} />
			</button>
		</div>
	);
};

export { InputAnswer };
