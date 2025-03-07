import { AuthRegisterDto, AuthRegisterResponse, register } from '@shared/libs/api/auth/register.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
	const { setUser, setAccessToken } = useAuthStore();

	return useMutation<AuthRegisterResponse, Error, AuthRegisterDto>({
		mutationFn: register,
		onSuccess: data => {
			setUser(data.user);
			setAccessToken(data.accessToken);
		},
		onError: error => {
			console.warn(error);
		}
	});
};
