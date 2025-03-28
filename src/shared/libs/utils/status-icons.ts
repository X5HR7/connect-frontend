import afkIcon from '@shared/assets/status/afk.svg';
import dndIcon from '@shared/assets/status/dnd.svg';
import offlineIcon from '@shared/assets/status/offline.svg';
import onlineIcon from '@shared/assets/status/online.svg';

export const statusIcons = {
	ONLINE: onlineIcon,
	INACTIVE: afkIcon,
	DO_NOT_DISTURB: dndIcon,
	OFFLINE: offlineIcon
} as const;
