import { useMutation } from '@tanstack/react-query';
import { useShallow } from 'zustand/shallow';
import { AuthLoginDto, AuthLoginResponse, login, useAuthStore } from '@entities/user';

export const useLogin = () => {
	const { setUser, setAccessToken } = useAuthStore(
		useShallow(state => ({
			setUser: state.setUser,
			setAccessToken: state.setAccessToken
		}))
	);

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
