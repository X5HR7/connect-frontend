import { TFriendsFilter } from '@shared/libs/interfaces';

export const getButtonTextByFilter = (filter: TFriendsFilter): string => {
	switch (filter) {
		case 'ALL':
			return 'Все';
		case 'ONLINE':
			return 'В сети';
		case 'ADD':
			return 'Добавить в друзья';
		default:
			return '';
	}
};
