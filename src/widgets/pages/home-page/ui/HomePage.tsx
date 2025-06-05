import dynamic from 'next/dynamic';
import { FC } from 'react';
import { AppLink } from '../components/app-link';
import styles from './HomePage.module.scss';
import { AboutProjectSection, KeyFeaturesSection } from './sections';

const TechnologiesSection = dynamic(() => import('./sections').then(mod => mod.TechnologiesSection));
const MarkdownSection = dynamic(() => import('./sections').then(mod => mod.MarkdownSection));
const SolutionsSection = dynamic(() => import('./sections').then(mod => mod.SolutionsSection));

const HomePage: FC = () => {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.header__title}>Мессенджер с поддержкой голосовых каналов</h1>
				<p className={styles.header__subtitle}>Современный веб-мессенджер с расширенными возможностями коммуникации.</p>
				<AppLink />
			</header>
			<main className={styles.main}>
				<AboutProjectSection />
				<KeyFeaturesSection />
				<TechnologiesSection />
				<MarkdownSection />
				<SolutionsSection />
			</main>
			<footer className={styles.footer}>
				<AppLink />
			</footer>
		</div>
	);
};

export { HomePage };
