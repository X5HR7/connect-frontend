import { FC } from 'react';
import { urls } from '@shared/libs/utils/url.config.ts';
import { NavLink } from '@shared/ui/nav-link';
import { HomeIcon } from '@shared/ui/svg';
import { Tooltip } from '@shared/ui/tooltip';
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
					exact={false}
				>
					<HomeIcon className={styles.item__link__image} itemClassName={styles['item__link__image-item']} />
				</NavLink>
			</Tooltip>
		</div>
	);
};

export { HomeLink };
