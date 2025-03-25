import { fetchWithAuth } from '@shared/libs/api/api-client.ts';
import { IServer } from '@shared/libs/interfaces/server.interface.ts';
import { BASE_SERVER_URL } from '@shared/libs/utils/constants.ts';

interface CreateServerDto {
	name: string;
	image?: string;
}

export const createServer = (data: CreateServerDto): Promise<IServer> => {
	return fetchWithAuth<IServer>(`${BASE_SERVER_URL}/servers`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
};
