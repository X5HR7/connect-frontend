import forumChannelIcon from '@shared/assets/icons/forum.svg';
import meetingChannelIcon from '@shared/assets/icons/meeting.svg';
import textChannelIcon from '@shared/assets/icons/text.svg';
import voiceChannelIcon from '@shared/assets/icons/voice.svg';
import { TServerChannelTypes } from '@shared/libs/interfaces';

export const getChannelIcon = (type: TServerChannelTypes) => {
	switch (type) {
		case 'TEXT':
			return textChannelIcon;
		case 'VOICE':
			return voiceChannelIcon;
		case 'ANNOUNCEMENTS':
			return forumChannelIcon;
		case 'MEETING':
			return meetingChannelIcon;
		default:
			return textChannelIcon;
	}
};
