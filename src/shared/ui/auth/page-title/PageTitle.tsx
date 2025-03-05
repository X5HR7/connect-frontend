import React, { FC } from 'react';
import styles from './PageTitle.module.scss';

interface IProps {
	text: string;
}

const PageTitle: FC<IProps> = ({ text }) => {
	return <h1 className={styles.text}>{text}</h1>;
};

export { PageTitle };
