import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const CloseIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M0.131771 0.129037C0.307507 -0.0430123 0.592432 -0.0430123 0.768168 0.129037L4.49997 3.78255L8.23177 0.129037C8.40751 -0.0430123 8.69243 -0.0430123 8.86817 0.129037C9.0439 0.301086 9.0439 0.580033 8.86817 0.752082L5.03994 4.5L8.86817 8.24792C9.0439 8.41997 9.0439 8.69891 8.86817 8.87096C8.69243 9.04301 8.40751 9.04301 8.23177 8.87096L4.49997 5.21745L0.768168 8.87096C0.592432 9.04301 0.307507 9.04301 0.131771 8.87096C-0.0439645 8.69891 -0.0439645 8.41997 0.131771 8.24792L3.96 4.5L0.131771 0.752082C-0.0439645 0.580033 -0.0439645 0.301086 0.131771 0.129037Z'
				fill='white'
				className={itemClassName}
			/>
		</svg>
	);
};

export { CloseIcon };
