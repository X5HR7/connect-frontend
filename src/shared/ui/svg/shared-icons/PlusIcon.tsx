import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const PlusIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0,0,256,256'
			width='24px'
			height='24px'
			fillRule='evenodd'
			className={className}
		>
			<g
				fill='#b5bac1'
				fillRule='evenodd'
				stroke='none'
				strokeWidth='1'
				strokeLinecap='butt'
				strokeLinejoin='miter'
				strokeMiterlimit='10'
				strokeDasharray=''
				strokeDashoffset='0'
			>
				<g transform='scale(10.66667,10.66667)'>
					<path d='M11,2v9h-9v2h9v9h2v-9h9v-2h-9v-9z' className={itemClassName}></path>
				</g>
			</g>
		</svg>
	);
};

export { PlusIcon };
