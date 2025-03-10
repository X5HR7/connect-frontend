import { FC, ReactNode } from 'react';
import styles from './Tooltip.module.scss';

interface ITooltipProps {
	text: string;
	children: ReactNode;
	position?: 'top' | 'right';
}

const Tooltip: FC<ITooltipProps> = ({ position, text, children }) => {
	return (
		<div className={styles.tooltip}>
			{children}
			<span className={`${styles.tooltip__text} ${styles[`tooltip__text_${position}`]}`}>{text}</span>
		</div>
	);
};

export { Tooltip };
