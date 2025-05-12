import { useMutation } from '@tanstack/react-query';
import { fetchUpdateUserProfile } from '@entities/user';

export const useUpdateProfile = () => {
	return useMutation({
		mutationKey: ['userProfileUpdate'],
		mutationFn: fetchUpdateUserProfile,
		retry: false
	});
};
