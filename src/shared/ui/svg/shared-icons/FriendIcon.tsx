import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const FriendIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			width='16'
			height='14'
			viewBox='0 0 16 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M9.59998 3.8C9.59998 5.56401 8.16478 7.00001 6.39999 7.00001C4.63599 7.00001 3.19999 5.56401 3.19999 3.8C3.19999 2.036 4.63519 0.600006 6.39999 0.600006C8.16478 0.600006 9.59998 2.036 9.59998 3.8ZM0 12.6C0 9.7736 2.63199 7.80001 6.39999 7.80001C10.1688 7.80001 12.8 9.7736 12.8 12.6V13.4H0V12.6ZM14.4003 13.4H16.0003V12.6C16.0003 10.5498 14.616 8.94837 12.4172 8.22333C13.6499 9.32533 14.4003 10.8399 14.4003 12.6V13.4ZM12.7999 3.79998C12.7999 5.32135 11.7324 6.59871 10.3065 6.92135C10.2416 6.89463 10.176 6.86863 10.11 6.84335C10.7909 6.01455 11.1999 4.95429 11.1999 3.79998C11.1999 2.58339 10.7456 1.47129 9.99749 0.62456C11.5752 0.820943 12.7999 2.17052 12.7999 3.79998Z'
				fill='white'
				className={itemClassName}
			/>
		</svg>
	);
};

export { FriendIcon };
