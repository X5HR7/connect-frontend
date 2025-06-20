import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const DisabledMicroIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg
			width='14'
			height='14'
			viewBox='0 0 14 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M5.00722 6.3595L5.00722 6.3595C5.01072 6.37875 5.01422 6.398 5.01422 6.419L9.20022 2.226V2.1C9.20022 0.938 8.26222 0 7.10022 0C5.93822 0 5.00022 0.938 5.00022 2.1V6.3C5.00022 6.321 5.00372 6.34025 5.00722 6.3595L5.00722 6.3595ZM3.3902 6.29999H2.2002C2.2002 7.13299 2.4382 7.90999 2.8302 8.59599L3.6912 7.73499C3.5022 7.30099 3.3902 6.81799 3.3902 6.29999ZM6.37429 10.3972L6.90664 9.86488C6.9709 9.86824 7.03537 9.86999 7.10005 9.86999C9.03205 9.86999 10.8101 8.39999 10.8101 6.29999H12.0001C12.0001 8.68699 10.0961 10.661 7.80005 11.004V14H6.40005V11.004C6.22295 10.9787 6.04851 10.9431 5.87736 10.8982L6.37429 10.3972Z'
				fill='#B9BBBE'
				className={itemClassName}
			/>
			<path
				d='M13.4 1.58901L12.511 0.700012L0.800049 12.411L1.68905 13.3L4.62205 10.374L5.48305 9.50601L6.64505 8.34401L9.19305 5.79601L13.4 1.58901Z'
				fill='#ED4245'
			/>
		</svg>
	);
};

export { DisabledMicroIcon };
