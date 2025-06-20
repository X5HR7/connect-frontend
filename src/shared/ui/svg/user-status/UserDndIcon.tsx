import { FC } from 'react';
import { UserStatusIcon } from './user-status-icon.inteface.ts';

const UserDndIcon: FC<UserStatusIcon> = ({ className, height = 10, width = 10 }) => {
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
				d='M6.87073 12.5677C10.1844 12.5677 12.8707 9.88146 12.8707 6.56775C12.8707 3.25404 10.1844 0.567749 6.87073 0.567749C3.55702 0.567749 0.870728 3.25404 0.870728 6.56775C0.870728 9.88146 3.55702 12.5677 6.87073 12.5677ZM4.56304 5.18313C3.79833 5.18313 3.17842 5.80305 3.17842 6.56775C3.17842 7.33245 3.79833 7.95236 4.56304 7.95236H9.17842C9.94312 7.95236 10.563 7.33245 10.563 6.56775C10.563 5.80305 9.94312 5.18313 9.17842 5.18313H4.56304Z'
				fill='#ED4245'
			/>
		</svg>
	);
};

export { UserDndIcon };
