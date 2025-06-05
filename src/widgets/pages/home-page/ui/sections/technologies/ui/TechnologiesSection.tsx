import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Section } from '@pages/home-page/components/section';
import sharedStyles from '../../shared/shared.module.scss';
import { data } from '../lib/data.ts';
import styles from './TechnologiesSection.module.scss';

const PublicTechIcon = dynamic(() => import('@shared/ui/svg').then(mod => mod.PublicTechIcon));

const TechnologiesSection: FC = () => {
	return (
		<Section
			title={'Технологический стек'}
			icon={<PublicTechIcon className={sharedStyles.icon} itemClassName={sharedStyles.icon__item} />}
		>
			<ul className={styles.techs}>
				{data.map((item, index) => (
					<li key={index} className={styles.item}>
						<p className={styles.item__title}>{item.title}</p>
						<ul className={styles.item__list}>
							{item.items.map((tech, index) => (
								<li key={index} className={styles['item__list-item']}>
									<b>{tech.name}</b> {tech.description}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</Section>
	);
};

export { TechnologiesSection };
