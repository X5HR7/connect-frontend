import { AuthLoginDto, AuthLoginResponse, login } from '@shared/libs/api/auth/login.ts';
import { useAuthStore } from '@shared/store/authStore.ts';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
	const { setUser, setAccessToken } = useAuthStore();

	return useMutation<AuthLoginResponse, Error, AuthLoginDto>({
		mutationFn: login,
		onSuccess: data => {
			setUser(data.user);
			setAccessToken(data.accessToken);
		},
		onError: error => {
			console.warn(error);
		}
	});
};
