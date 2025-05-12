import { FC } from 'react';
import { IconProps } from '../icon.interface.ts';

const ReplyIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#FFFFFF' className={className}>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<path
					d='M20 17V15.8C20 14.1198 20 13.2798 19.673 12.638C19.3854 12.0735 18.9265 11.6146 18.362 11.327C17.7202 11 16.8802 11 15.2 11H4M4 11L8 7M4 11L8 15'
					stroke='#FFFFFF'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className={itemClassName}
				></path>
			</g>
		</svg>
	);
};

export { ReplyIcon };
