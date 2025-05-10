import { Dispatch, SetStateAction } from 'react';

export interface ServerControlsProps {
	isOpened: boolean;
	setIsOpened: Dispatch<SetStateAction<boolean>>;
	serverId: string;
}
