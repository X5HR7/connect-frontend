import { fetchWithAuth } from '@shared/libs/api/api-client.ts';
import { IServer } from '@shared/libs/interfaces';
import { IFServer } from '@shared/libs/interfaces/server.interface.ts';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

export const fetchUserServers = () => {
	return fetchWithAuth<IServer[]>(`${BASE_SERVER_URL}/servers`, {
		method: 'GET'
	});
};

export const fetchServer = (id: string) => {
	return fetchWithAuth<IFServer>(`${BASE_SERVER_URL}/servers/${id}`, {
		method: 'GET'
	});
};
