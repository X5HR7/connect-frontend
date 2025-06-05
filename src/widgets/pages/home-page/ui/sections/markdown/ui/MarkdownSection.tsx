import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Section } from '@pages/home-page/components/section';
import sharedStyles from '../../shared/shared.module.scss';
import { Selection } from '../components';
import styles from './MarkdownSection.module.scss';

const PublicMarkdownIcon = dynamic(() => import('@shared/ui/svg').then(mod => mod.PublicMarkdownIcon));

const MarkdownSection: FC = () => {
	return (
		<Section
			title={'Поддержка Markdown в сообщениях'}
			icon={<PublicMarkdownIcon className={sharedStyles.icon} itemClassName={sharedStyles.icon__item} />}
		>
			<p className={sharedStyles.text}>Реализована расширенная поддержка синтаксиса Markdown:</p>
			<div className={styles.chapter}>
				<p className={styles.chapter__title}>Заголовки:</p>
				<Selection>
					<span># Заголовок 1 уровня</span>
					<span>## Заголовок 2 уровня</span>
					<span>...</span>
					<span>###### Заголовок 6 уровня</span>
				</Selection>
			</div>
			<div className={styles.chapter}>
				<p className={styles.chapter__title}>Текстовое форматирование:</p>
				<ul className={styles.chapter__list}>
					<li className={styles['chapter__list-item']}>
						<b>Жирный</b>: **текст** или __текст__
					</li>
					<li className={styles['chapter__list-item']}>
						<i>Курсив</i>: *текст* или _текст_
					</li>
					<li className={styles['chapter__list-item']}>
						<del>Зачёркнутый</del>: ~~текст~~
					</li>
					<li className={styles['chapter__list-item']}>
						<span className={styles['inline-code']}>Встроенный код</span>: `код`
					</li>
					<li className={styles['chapter__list-item']}>
						Блоки кода:
						<Selection>
							<span>```</span>
							<span>Блоки кода</span>
							<span>```</span>
						</Selection>
					</li>
					<li className={styles['chapter__list-item']}>
						<span className={styles.link}>Ссылки (URL)</span>: [Ссылки](URL)
					</li>
				</ul>
			</div>
			<div className={styles.chapter}>
				<p className={styles.chapter__title}>Списки:</p>
				<p className={styles.chapter__text}>Нумерованные:</p>
				<ol className={styles.ol}>
					<li>Первый пункт</li>
					<li>Второй пункт</li>
					<li>Третий пункт</li>
				</ol>
				<p className={styles.chapter__text}>Маркированные:</p>
				<ul className={styles.ul}>
					<li>Первый пункт</li>
					<li>Второй пункт</li>
					<li>Третий пункт</li>
				</ul>
			</div>
			<div className={styles.chapter}>
				<p className={styles.chapter__title}>Цитаты:</p>
				<blockquote className={styles.blockquote}>
					<p>Первая строка</p>
					<p>Вторая строка</p>
					<p>Третья строка</p>
				</blockquote>
			</div>
		</Section>
	);
};

export { MarkdownSection };
