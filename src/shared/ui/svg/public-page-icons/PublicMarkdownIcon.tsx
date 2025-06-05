import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const PublicMarkdownIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={className}
		>
			<polyline points='16 18 22 12 16 6' className={itemClassName}></polyline>
			<polyline points='8 6 2 12 8 18' className={itemClassName}></polyline>
		</svg>
	);
};

export { PublicMarkdownIcon };
