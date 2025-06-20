import { FC } from 'react';
import { UserStatusIcon } from './user-status-icon.inteface.ts';

const UserAfkIcon: FC<UserStatusIcon> = ({ className, height = 10, width = 10 }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 13 13'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M6.86506 12.4795C10.1819 12.4795 12.8707 9.79068 12.8707 6.47383C12.8707 3.54093 10.7684 1.09906 7.98847 0.573033C7.7215 0.522516 7.5572 0.845242 7.7078 1.07139C8.18324 1.78534 8.46032 2.64272 8.46032 3.56482C8.46032 6.05246 6.44369 8.06909 3.95606 8.06909C3.03396 8.06909 2.17658 7.79201 1.46263 7.31656C1.23648 7.16596 0.913751 7.33027 0.964268 7.59724C1.4903 10.3772 3.93216 12.4795 6.86506 12.4795Z'
				fill='#FAA61A'
			/>
		</svg>
	);
};

export { UserAfkIcon };
