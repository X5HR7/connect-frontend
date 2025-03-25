import { createServer } from '@shared/libs/api/servers/create-server.ts';
import { useMutation } from '@tanstack/react-query';

export const useCreateServer = () => {
	return useMutation({
		mutationFn: createServer,
		onError: error => {
			console.warn(error);
		}
	});
};
