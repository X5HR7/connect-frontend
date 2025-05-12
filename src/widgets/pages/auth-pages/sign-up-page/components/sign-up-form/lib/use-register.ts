import { useMutation } from '@tanstack/react-query';
import { useShallow } from 'zustand/shallow';
import { AuthRegisterDto, AuthRegisterResponse, register, useAuthStore } from '@entities/user';

export const useRegister = () => {
	const { setUser, setAccessToken } = useAuthStore(
		useShallow(state => ({
			setUser: state.setUser,
			setAccessToken: state.setAccessToken
		}))
	);

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
