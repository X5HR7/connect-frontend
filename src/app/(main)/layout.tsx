import { AuthProvider } from '@shared/libs/providers/AuthProvider.tsx';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return <AuthProvider>{children}</AuthProvider>;
};

export default Layout;
