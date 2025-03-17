import { Dispatch, SetStateAction } from 'react';

export interface IServerControlsProps {
	isOpened: boolean;
	setIsOpened: Dispatch<SetStateAction<boolean>>;
	serverId: string;
}
