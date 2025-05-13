import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const OffShareScreenIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='15px'
			height='15px'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#B9BBBE'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={className}
		>
			<g strokeWidth='0' />
			<g strokeLinecap='round' strokeLinejoin='round' />
			<g>
				<path d='M13 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-3' className={itemClassName} />
				<path d='M8 21h8' className={itemClassName} />
				<path d='M12 17v4' className={itemClassName} />
				<path d='M22 3l-5 5' className={itemClassName} />
				<path d='M17 3l5 5' className={itemClassName} />
			</g>
		</svg>
	);
};

export { OffShareScreenIcon };
