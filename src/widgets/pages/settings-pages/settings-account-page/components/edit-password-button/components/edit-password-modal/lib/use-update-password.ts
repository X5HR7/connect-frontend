import { fetchUpdateUserPassword } from '@shared/libs/api/user/user.ts';
import { useMutation } from '@tanstack/react-query';

export const useUpdatePassword = () => {
	return useMutation({
		mutationKey: ['updatePassword'],
		mutationFn: fetchUpdateUserPassword,
		retry: false
	});
};
