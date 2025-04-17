import { fetchWithAuth } from '@shared/libs/api/api-client.ts';
import { IServerTextChannel } from '@shared/libs/interfaces';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

export interface IServerChannelParams {
	serverId: string;
	categoryId: string;
	channelId: string;
}

export const fetchServerTextChannel = ({ serverId, categoryId, channelId }: IServerChannelParams) => {
	return fetchWithAuth<IServerTextChannel>(
		`${BASE_SERVER_URL}/servers/${serverId}/category/${categoryId}/channels/${channelId}/text`,
		{
			method: 'GET'
		}
	);
};
