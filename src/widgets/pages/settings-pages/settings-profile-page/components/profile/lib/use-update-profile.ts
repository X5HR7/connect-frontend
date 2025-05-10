import { fetchUpdateUserProfile } from '@shared/libs/api/user/user.ts';
import { useMutation } from '@tanstack/react-query';

export const useUpdateProfile = () => {
	return useMutation({
		mutationKey: ['userProfileUpdate'],
		mutationFn: fetchUpdateUserProfile,
		retry: false
	});
};
