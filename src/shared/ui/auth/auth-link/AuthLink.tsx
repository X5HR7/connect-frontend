import Link from 'next/link';
import React, { FC } from 'react';
import styles from './AuthLink.module.scss';

interface IProps {
	href: string;
	text: string;
}

const AuthLink: FC<IProps> = ({ text, href }) => {
	return (
		<Link href={href} className={styles.link}>
			{text}
		</Link>
	);
};

export { AuthLink };
