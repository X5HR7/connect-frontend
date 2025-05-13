'use client';

import { FC } from 'react';
import { ShareDisplayButton } from '@entities/direct-chat';

interface ShareDisplayButtonProps {
	disabled?: boolean;
}

const ShareDisplay: FC<ShareDisplayButtonProps> = () => {
	return <ShareDisplayButton disabled={true} />;
};

export { ShareDisplay };
