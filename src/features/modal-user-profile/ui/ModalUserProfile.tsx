import { FC } from 'react';
import { IModalUserProfileProps } from '../lib/modal-user-profile.interface.ts';
import styles from './ModalUserProfile.module.scss';

const ModalUserProfile: FC<IModalUserProfileProps> = ({ userId }) => {
	return <div className={styles.profile}>User profile {userId}</div>;
};

export { ModalUserProfile };
