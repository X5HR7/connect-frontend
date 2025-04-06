import { FC } from 'react';
import styles from './Loader.module.scss';

interface ILoaderProps {
	size?: number;
	color?: string;
	borderWidth?: number;
	className?: string;
}

const Loader: FC<ILoaderProps> = ({ color, size = 30, borderWidth = 2, className }) => {
	return (
		<div
			className={`${styles.loader} ${className || ''}`}
			style={{
				width: `${size}px`,
				height: `${size}px`,
				borderColor: color || '#1a1b1e',
				borderWidth: borderWidth,
				borderTopColor: 'transparent'
			}}
		/>
	);
};

export { Loader };
