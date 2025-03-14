import homeIcon from '@shared/assets/icons/home.svg';
import { urls } from '@shared/libs/utils/url.config.ts';
import { NavLink } from '@shared/ui/nav-link/NavLink.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import Image from 'next/image';
import { FC } from 'react';
import styles from './HomeLink.module.scss';

const HomeLink: FC = () => {
	return (
		<div className={styles.item}>
			<Tooltip text={'На главную'} position={'right'}>
				<NavLink
					href={urls.FRIENDS}
					replace={false}
					className={styles.item__link}
					activeClassName={styles.item__link_active}
				>
					<Image src={homeIcon} alt={'На главную'} className={styles.item__link__image} />
				</NavLink>
			</Tooltip>
		</div>
	);
};

export { HomeLink };
