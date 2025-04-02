import searchIcon from '@shared/assets/icons/search.svg';
import Image from 'next/image';
import { FC } from 'react';
import styles from './ChatSearchForm.module.scss';

const ChatSearchForm: FC = () => {
	return (
		<form action={'search'} className={styles.form}>
			<input placeholder={'Поиск'} className={styles.form__input} />
			<Image src={searchIcon} alt={'Search'} className={styles.form__icon} />
		</form>
	);
};

export { ChatSearchForm };
