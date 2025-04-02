'use client';

import pinnedIcon from '@shared/assets/icons/pinned.svg';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import Image from 'next/image';
import { FC } from 'react';
import styles from './PinnedMessagesButton.module.scss';

const PinnedMessagesButton: FC = () => {
	const handleButtonClick = () => {};

	return (
		<button className={styles.button} onClick={handleButtonClick}>
			<Tooltip text={'Запрепленные сообщения'} position={'bottom'}>
				<Image src={pinnedIcon} alt={'Pinned'} className={styles.button__image} />
			</Tooltip>
		</button>
	);
};

export { PinnedMessagesButton };
