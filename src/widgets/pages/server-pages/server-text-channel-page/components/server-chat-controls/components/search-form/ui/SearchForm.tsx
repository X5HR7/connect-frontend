import Image from 'next/image';
import { FC } from 'react';
import searchIcon from '@shared/assets/icons/search.svg';
import styles from './SearchForm.module.scss';

const SearchForm: FC = () => {
	return (
		<form action={'search'} className={styles.form}>
			<input placeholder={'Поиск'} className={styles.form__input} />
			<Image src={searchIcon} alt={'Search'} className={styles.form__icon} />
		</form>
	);
};

export { SearchForm };
