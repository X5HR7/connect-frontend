import { FC } from 'react';
import { UserStatusIcon } from './user-status-icon.inteface.ts';

const UserOfflineIcon: FC<UserStatusIcon> = ({ className, height = 10, width = 10 }) => {
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
				d='M6.95898 12.5677C10.2727 12.5677 12.959 9.88146 12.959 6.56775C12.959 3.25404 10.2727 0.567749 6.95898 0.567749C3.64528 0.567749 0.958984 3.25404 0.958984 6.56775C0.958984 9.88146 3.64528 12.5677 6.95898 12.5677ZM6.95898 3.79852C5.42958 3.79852 4.18975 5.03835 4.18975 6.56775C4.18975 8.09715 5.42958 9.33698 6.95898 9.33698C8.48839 9.33698 9.72822 8.09715 9.72822 6.56775C9.72822 5.03835 8.48839 3.79852 6.95898 3.79852Z'
				fill='#747F8D'
			/>
		</svg>
	);
};

export { UserOfflineIcon };
