import { ReactNode } from 'react';
import { AuthProvider } from '@shared/libs/providers/AuthProvider.tsx';

const Layout = ({ children }: { children: ReactNode }) => {
	return <AuthProvider>{children}</AuthProvider>;
};

export default Layout;
