import { FC } from 'react';
import { IconProps } from '@shared/ui/svg/icon.interface.ts';

const DisabledVoiceIcon: FC<IconProps> = ({ className, itemClassName }) => {
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
				fillRule='evenodd'
				clipRule='evenodd'
				d='M3.12776 8.41645C3.16308 8.41645 3.19807 8.41788 3.23267 8.42066L0.538086 11.1152V6.47419C0.538086 2.90368 3.44241 0 7.01228 0C8.32952 0 9.55612 0.39534 10.5797 1.07365L9.64074 2.01256C8.86979 1.55665 7.97104 1.29484 7.01228 1.29484C4.15651 1.29484 1.83292 3.61778 1.83292 6.47419V8.41645H3.12776ZM12.1913 6.4742C12.1913 6.0078 12.1294 5.55571 12.0133 5.12554L13.0364 4.10243C13.3266 4.8372 13.4862 5.63741 13.4862 6.4742V11.6536C13.4862 12.3683 12.9067 12.9484 12.1913 12.9484H10.8965C10.1817 12.9484 9.60164 12.3683 9.60164 11.6536V9.7113C9.60164 8.99655 10.1817 8.41646 10.8965 8.41646H12.1913V6.4742Z'
				fill='#B9BBBE'
				className={itemClassName}
			/>
			<path d='M1.31549 14L0.399902 13.0844L13.2182 0.266174L14.1337 1.18177L1.31549 14Z' fill='#ED4245' />
		</svg>
	);
};

export { DisabledVoiceIcon };
