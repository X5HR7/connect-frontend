import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const EnabledVoiceIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			width='15'
			height='14'
			viewBox='0 0 15 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M7.13377 0C3.27398 0 0.133789 3.13949 0.133789 7.00002V12.6C0.133789 13.3728 0.760287 14 1.53379 14H2.93378C3.70658 14 4.33378 13.3728 4.33378 12.6V10.5C4.33378 9.72721 3.70658 9.10001 2.93378 9.10001H1.53379V7.00002C1.53379 3.91159 4.04608 1.4 7.13377 1.4C10.2215 1.4 12.7338 3.91159 12.7338 7.00002V9.10001H11.3338C10.561 9.10001 9.93376 9.72721 9.93376 10.5V12.6C9.93376 13.3728 10.561 14 11.3338 14H12.7338C13.5066 14 14.1338 13.3728 14.1338 12.6V7.00002C14.1338 3.13949 10.9936 0 7.13377 0Z'
				fill='#B9BBBE'
				className={itemClassName}
			/>
		</svg>
	);
};

export { EnabledVoiceIcon };
