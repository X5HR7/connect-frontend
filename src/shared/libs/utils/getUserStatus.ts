import { TProfileStatus } from '@shared/libs/interfaces/user.interface.ts';

export const getUserStatus = (status?: TProfileStatus) => {
	switch (status) {
		case 'ONLINE':
			return 'В сети';
		case 'INACTIVE':
			return 'Неактивен';
		case 'DO_NOT_DISTURB':
			return 'Не беспокоить';
		case 'OFFLINE':
			return 'Не в сети';
		default:
			return '';
	}
};
