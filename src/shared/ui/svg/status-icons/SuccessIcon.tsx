import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const SuccessIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			width='20px'
			height='20px'
			viewBox='0 0 1024 1024'
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			fill='#000000'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0' className={itemClassName}></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' className={itemClassName}></g>
			<g id='SVGRepo_iconCarrier' className={itemClassName}>
				<path
					fill='#3ba55c'
					d='M512 64a448 448 0 110 896 448 448 0 010-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 10-54.336 54.336l126.72 126.72a38.272 38.272 0 0054.336 0l262.4-262.464a38.4 38.4 0 10-54.272-54.336L456.192 600.384z'
					className={itemClassName}
				></path>
			</g>
		</svg>
	);
};

export { SuccessIcon };
