import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const ErrorIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			width='20px'
			height='20px'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			stroke='#000000'
			className={className}
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0' className={itemClassName}></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' className={itemClassName}></g>
			<g id='SVGRepo_iconCarrier' className={itemClassName}>
				<path
					d='M12 16H12.01M12 8V12M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
					stroke='#ed4245'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className={itemClassName}
				></path>
			</g>
		</svg>
	);
};

export { ErrorIcon };
