import { FC } from 'react';
import { UserStatusIcon } from './user-status-icon.inteface.ts';

const UserOnlineIcon: FC<UserStatusIcon> = ({ className, height = 10, width = 10 }) => {
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
				d='M12.8707 6.56775C12.8707 9.88146 10.1844 12.5677 6.87073 12.5677C3.55702 12.5677 0.870728 9.88146 0.870728 6.56775C0.870728 3.25404 3.55702 0.567749 6.87073 0.567749C10.1844 0.567749 12.8707 3.25404 12.8707 6.56775Z'
				fill='#3BA55C'
			/>
		</svg>
	);
};

export { UserOnlineIcon };
