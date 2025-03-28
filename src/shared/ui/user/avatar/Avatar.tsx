import profileAvatar from '@shared/assets/icons/profile_avatar_temlate.png';
import offlineIcon from '@shared/assets/status/offline.svg';
import { IUserProfile } from '@shared/libs/interfaces';
import { statusIcons } from '@shared/libs/utils/status-icons.ts';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Avatar.module.scss';

interface IAvatarProps {
	profile?: IUserProfile;
	size?: number;
	statusStyles?: string;
	indicatorSize?: number;
}

const Avatar: FC<IAvatarProps> = ({ profile, size = 32, statusStyles = '', indicatorSize }) => {
	const indicatorWrapperSize = indicatorSize || size / 2;
	const indicatorStatusSize = indicatorWrapperSize / 1.6;

	return (
		<div
			className={styles.avatar}
			style={{
				width: `${size}px`,
				height: `${size}px`
			}}
		>
			<Image
				src={profile?.avatar || profileAvatar}
				alt={'profile avatar'}
				className={styles.avatar__image}
				style={{
					width: `${size}px`,
					height: `${size}px`
				}}
			/>
			<div
				className={`${styles.avatar__status} ${statusStyles}`}
				style={{ width: indicatorWrapperSize, height: indicatorWrapperSize }}
			>
				<Image
					src={profile?.status ? statusIcons[profile?.status] : offlineIcon}
					alt={'status icon'}
					className={styles['avatar__status-' + profile?.status]}
					style={{ width: indicatorStatusSize, height: indicatorStatusSize }}
				></Image>
			</div>
		</div>
	);
};

export { Avatar };
