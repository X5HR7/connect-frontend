import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const PinIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			width='14'
			height='16'
			viewBox='0 0 14 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				className={itemClassName}
				d='M14 8.26628L6.74116 0.809937L5.70356 1.87427L6.74116 2.94011L3.11135 6.66791V6.66942L2.07374 5.60358L1.03687 6.66942L4.14822 9.86467L0 14.125L1.03687 15.1901L5.18509 10.9298L8.29647 14.125L9.33334 13.0599L8.29647 11.9948L11.9255 8.26628H11.9263L12.9631 9.33137L14 8.26628Z'
				fill='white'
			/>
		</svg>
	);
};

export { PinIcon };
