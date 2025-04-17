import { FC } from 'react';
import styles from '@features/chat/message/ui/UserMessage.module.scss';

const OptionsIcon: FC = () => {
	return (
		<svg
			width='15'
			height='6'
			viewBox='0 0 24 6'
			xmlns='http://www.w3.org/2000/svg'
			className={styles['message__controls-button-icon']}
		>
			<circle cx='3' cy='3' r='3' fill='currentColor' />
			<circle cx='12' cy='3' r='3' fill='currentColor' />
			<circle cx='21' cy='3' r='3' fill='currentColor' />
		</svg>
	);
};

export { OptionsIcon };
