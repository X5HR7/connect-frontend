import { IconProps } from '@shared/ui/svg/icon.interface.ts';
import { FC } from 'react';

const SynchronizeIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				<path
					d='M3 11.9998C3 7.02919 7.02944 2.99976 12 2.99976C14.8273 2.99976 17.35 4.30342 19 6.34242'
					stroke='#292929'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					className={itemClassName}
				></path>
				<path
					d='M19.5 2.99976L19.5 6.99976L15.5 6.99976'
					stroke='#292929'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					className={itemClassName}
				></path>
				<path
					d='M21 11.9998C21 16.9703 16.9706 20.9998 12 20.9998C9.17273 20.9998 6.64996 19.6961 5 17.6571'
					stroke='#292929'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					className={itemClassName}
				></path>
				<path
					d='M4.5 20.9998L4.5 16.9998L8.5 16.9998'
					stroke='#292929'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					className={itemClassName}
				></path>
			</g>
		</svg>
	);
};

export { SynchronizeIcon };
