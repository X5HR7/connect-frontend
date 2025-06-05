import { FC, ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
	title: string;
	icon: ReactNode;
	children?: ReactNode;
}

const Section: FC<SectionProps> = ({ title, icon, children }) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__header}>
				{icon}
				<h2 className={styles.section__title}>{title}</h2>
			</div>
			<div className={styles.section__content}>{children}</div>
		</section>
	);
};

export { Section };
