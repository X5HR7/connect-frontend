import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const HomeIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			width='13'
			height='14'
			viewBox='0 0 13 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M5.2 12.05V8.15H7.8V12.05H11.05V6.85H13L6.5 1L0 6.85H1.95V12.05H5.2Z'
				fill='white'
				className={itemClassName}
			/>
		</svg>
	);
};

export { HomeIcon };
