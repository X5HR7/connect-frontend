import profileAvatar from '@shared/assets/icons/profile_avatar_temlate.png';
import { IUserProfile } from '@shared/libs/interfaces';
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
				<div
					className={styles['avatar__status-' + profile?.status]}
					style={{ width: indicatorStatusSize, height: indicatorStatusSize }}
				></div>
			</div>
		</div>
	);
};

export { Avatar };
