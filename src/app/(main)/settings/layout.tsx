import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { SettingsNavigation } from '@widgets/settings/navigation';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import styles from './layout.module.scss';

const GoBackButton = dynamic(() => import('@features/settings/go-back-button'));

export const metadata: Metadata = {
	title: `${APP_NAME} | Настройки`
};

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.layout}>
			<aside className={styles.layout__nav}>
				<SettingsNavigation />
			</aside>
			<section className={styles.layout__page}>
				<Scroll width={6}>{children}</Scroll>
			</section>
			<div className={styles.layout__close}>
				<GoBackButton />
			</div>
		</div>
	);
};

export default Layout;
