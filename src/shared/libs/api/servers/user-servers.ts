import { fetchWithAuth } from '@shared/libs/api/api-client.ts';
import { IServer } from '@shared/libs/interfaces';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

export const fetchUserServers = () => {
	return fetchWithAuth<IServer[]>(`${BASE_SERVER_URL}/servers`, {
		method: 'GET'
	});
};
