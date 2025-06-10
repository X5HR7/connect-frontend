import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { cn } from '@shared/libs/utils';
import { Loader } from '@shared/ui/loader';
import styles from './Button.module.scss';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	status?: 'success' | 'error' | 'default' | 'warning';
	isLoading?: boolean;
	isCompact?: boolean;
}

const Button: FC<ButtonProps> = ({
	status = 'default',
	type = 'button',
	isLoading = false,
	isCompact = false,
	children,
	className,
	...props
}) => {
	return (
		<button
			type={type}
			className={cn(styles.button, styles[`button_${status}`], isCompact ? styles.button_compact : null, className)}
			{...props}
		>
			{isLoading ? <Loader size={10} color={'#FFF'} /> : children}
		</button>
	);
};

export { Button };
