import { useMutation } from '@tanstack/react-query';
import { fetchUpdateUserPassword } from '@entities/user';

export const useUpdatePassword = () => {
	return useMutation({
		mutationKey: ['updatePassword'],
		mutationFn: fetchUpdateUserPassword,
		retry: false
	});
};
