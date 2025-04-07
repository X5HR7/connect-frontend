import { FC } from 'react';
import styles from './SectionTitle.module.scss';

interface ISectionTitleProps {
	title: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({ title }) => {
	return <h2 className={styles.title}>{title}</h2>;
};

export { SectionTitle };
