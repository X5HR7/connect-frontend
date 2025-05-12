import { ReactNode } from 'react';
import { AuthProvider } from './_providers/AuthProvider.tsx';
import { SocketProvider } from './_providers/SocketProvider.tsx';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<AuthProvider>
			<SocketProvider>{children}</SocketProvider>
		</AuthProvider>
	);
};

export default Layout;
