import { FC } from 'react';
import { IconProps } from '../icon.interface.ts';

const SendMessageIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			width='17'
			height='15'
			viewBox='0 0 17 15'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M8.66219 7.9981L2.34338 8.609L0.6806 13.9269C0.581456 14.2413 0.678712 14.585 0.92892 14.8003C1.17818 15.0155 1.53227 15.0609 1.82877 14.9164L15.6767 8.21059C15.9477 8.0784 16.1196 7.80363 16.1196 7.50242C16.1196 7.20121 15.9476 6.92645 15.6767 6.79425L1.8382 0.0836024C1.54171 -0.060864 1.18763 -0.0155414 0.938347 0.199742C0.688118 0.415027 0.590873 0.757778 0.690027 1.07221L2.35279 6.39006L8.6593 7.00191C8.91423 7.0274 9.10875 7.24174 9.10875 7.49762C9.10875 7.75352 8.91424 7.96784 8.6593 7.99334L8.66219 7.9981Z'
				fill='#949CF7'
				className={itemClassName}
			/>
		</svg>
	);
};

export { SendMessageIcon };
