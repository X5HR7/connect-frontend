import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Section } from '@pages/home-page/components/section';
import sharedStyles from '../../shared/shared.module.scss';
import { data } from '../lib/data.ts';
import styles from './SolutionsSection.module.scss';

const PublicSolutionsIcon = dynamic(() => import('@shared/ui/svg').then(mod => mod.PublicSolutionsIcon));

const SolutionsSection: FC = () => {
	return (
		<Section
			title={'Архитектурные решения'}
			icon={<PublicSolutionsIcon className={sharedStyles.icon} itemClassName={sharedStyles.icon__item} />}
		>
			<ol className={styles.list}>
				{data.map((solution, index) => (
					<li key={index} className={styles.list__item}>
						<p className={styles['list__item-title']}>{solution.title}</p>
						<ul className={styles['list__item-items']}>
							{solution.items.map((item, index) => (
								<li key={index} className={styles['list__item-items-item']}>
									{item}
								</li>
							))}
						</ul>
					</li>
				))}
			</ol>
		</Section>
	);
};

export { SolutionsSection };
