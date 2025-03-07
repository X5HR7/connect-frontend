import { FC } from 'react';
import styles from './Loader.module.scss';

interface ILoaderProps {
	size?: number;
	color?: string;
	borderWidth?: number;
}

const Loader: FC<ILoaderProps> = ({ color = '#1a1b1e', size = 30, borderWidth = 2 }) => {
	return (
		<div
			className={styles.loader}
			style={{
				width: `${size}px`,
				height: `${size}px`,
				borderColor: color,
				borderWidth: borderWidth,
				borderTopColor: 'transparent'
			}}
		/>
	);
};

export { Loader };
