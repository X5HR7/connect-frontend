import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Section } from '@pages/home-page/components/section';
import sharedStyles from '../../shared/shared.module.scss';
import { data } from '../lib/data.ts';
import styles from './KeyFeaturesSection.module.scss';

const PublicEnergyIcon = dynamic(() => import('@shared/ui/svg').then(mod => mod.PublicEnergyIcon));

const KeyFeaturesSection: FC = () => {
	return (
		<Section
			title={'Ключевые особенности'}
			icon={<PublicEnergyIcon className={sharedStyles.icon} itemClassName={sharedStyles.icon__item} />}
		>
			<h2 className={styles.features__title}>Реализованный функционал:</h2>
			<ol className={styles.features__content}>
				{data.map((data, index) => (
					<li className={styles['features__content-item']} key={index}>
						<p className={styles['features__content-item-title']}>{data.title}</p>
						<ul className={styles['features__content-item-list']}>
							{data.items.map((item, index) => (
								<li key={index} className={styles['features__content-item-list-item']}>
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

export { KeyFeaturesSection };
