import { FC } from 'react';
import { IMediaButtonProps } from '../lib/media-button.interface.ts';
import styles from './MediaButton.module.scss';

const MediaButton: FC<IMediaButtonProps> = ({ children, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};

export { MediaButton };
