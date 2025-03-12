import { TFriendsStatus } from '@shared/libs/interfaces/pages.inteface.ts';
import { Dispatch, SetStateAction } from 'react';

export interface ITopPanel {
	filter: TFriendsStatus;
	setFilter: Dispatch<SetStateAction<TFriendsStatus>>;
}
