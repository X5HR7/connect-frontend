import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Section } from '@pages/home-page/components/section';
import sharedStyles from '../../shared/shared.module.scss';

const PublicChatIcon = dynamic(() => import('@shared/ui/svg').then(mod => mod.PublicChatIcon));

const AboutProjectSection: FC = () => {
	return (
		<Section
			title={'О проекте'}
			icon={<PublicChatIcon className={sharedStyles.icon} itemClassName={sharedStyles.icon__item} />}
		>
			<p className={sharedStyles.text}>
				Это современный веб-мессенджер с расширенными возможностями коммуникации, вдохновленный популярными решениями
				для командного общения. Проект разрабатывался с нуля с использованием актуальных веб-технологий и архитектурных
				подходов.
			</p>
		</Section>
	);
};

export { AboutProjectSection };
