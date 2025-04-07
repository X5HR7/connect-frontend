import { FC } from 'react';
import styles from './PageTitle.module.scss';

interface IPageTitleProps {
	title: string;
}

const PageTitle: FC<IPageTitleProps> = ({ title }) => {
	return <h1 className={styles.title}>{title}</h1>;
};

export { PageTitle };
