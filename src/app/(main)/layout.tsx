import { AuthProvider } from '@shared/libs/providers/AuthProvider.tsx';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
	const cookieStore = await cookies();
	const accessToken: string | undefined = cookieStore.get('access_token')?.value;

	return (
		<>
			<AuthProvider accessToken={accessToken}>{children}</AuthProvider>
		</>
	);
};

export default Layout;
