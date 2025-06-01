'use client';

import { FC } from 'react';
import { ShareScreenIcon } from '@shared/ui/svg';
import { MediaButton } from '@shared/ui/user';
import styles from './ShareDisplayButton.module.scss';

interface ShareDisplayButtonProps {
	disabled?: boolean;
	onClick?: () => void;
}

const ShareDisplayButton: FC<ShareDisplayButtonProps> = ({ disabled = false, onClick }) => {
	return (
		<MediaButton disabled={disabled} onClick={onClick}>
			<ShareScreenIcon className={styles.icon} />
		</MediaButton>
	);
};

export { ShareDisplayButton };
