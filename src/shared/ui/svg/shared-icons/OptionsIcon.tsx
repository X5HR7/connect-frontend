import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const OptionsIcon: FC<IconProps> = ({ className, itemClassName }) => {
	return (
		<svg width='15' height='6' viewBox='0 0 24 6' xmlns='http://www.w3.org/2000/svg' className={className}>
			<circle cx='3' cy='3' r='3' fill='currentColor' className={itemClassName} />
			<circle cx='12' cy='3' r='3' fill='currentColor' className={itemClassName} />
			<circle cx='21' cy='3' r='3' fill='currentColor' className={itemClassName} />
		</svg>
	);
};

export { OptionsIcon };
