import { FC } from 'react';
import { IconProps } from '../icon.interface.ts';

const UploadIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			width='16'
			height='17'
			viewBox='0 0 16 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M8 0.5C3.5888 0.5 0 4.0888 0 8.50001C0 12.9112 3.5888 16.5 8 16.5C12.4112 16.5 16 12.9112 16 8.50001C16 4.0888 12.4112 0.5 8 0.5ZM12 9.30001H8.8V12.5H7.2V9.30001H4V7.70001H7.2V4.5H8.8V7.70001H12V9.30001Z'
				fill='white'
				className={itemClassName}
			/>
		</svg>
	);
};

export { UploadIcon };
