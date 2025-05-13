import Image from 'next/image';
import { FC } from 'react';
import profileAvatar from '@shared/assets/icons/profile_avatar_temlate.png';
import { IUserProfile } from '@shared/libs/interfaces';
import { statusIcons } from '@shared/libs/utils/status-icons.ts';
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
	const Icon = statusIcons[profile?.status || 'OFFLINE'];

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
				width={size}
				height={size}
				style={{
					width: `${size}px`,
					height: `${size}px`
				}}
			/>
			<div
				className={`${styles.avatar__status} ${statusStyles}`}
				style={{ width: indicatorWrapperSize, height: indicatorWrapperSize }}
			>
				<Icon
					className={styles[`avatar__status-${profile?.status}`]}
					width={indicatorStatusSize}
					height={indicatorStatusSize}
				/>
			</div>
		</div>
	);
};

export { Avatar };
