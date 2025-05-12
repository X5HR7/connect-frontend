import { UserAfkIcon, UserDndIcon, UserOfflineIcon, UserOnlineIcon } from '@shared/ui/svg';

export const statusIcons = {
	ONLINE: UserOnlineIcon,
	INACTIVE: UserAfkIcon,
	DO_NOT_DISTURB: UserDndIcon,
	OFFLINE: UserOfflineIcon
} as const;
