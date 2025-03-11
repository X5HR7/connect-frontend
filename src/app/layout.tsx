import { AuthProvider } from '@app/_providers/AuthProvider.tsx';
import { QueryProvider } from '@app/_providers/QueryProvider.tsx';
import { AuthResponse } from '@shared/libs/api/api-client.ts';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.scss';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'cyrillic'],
	weight: ['200', '400', '500', '600', '700'],
	style: ['normal', 'italic']
});

export const metadata: Metadata = {
	title: 'Connect app',
	description: 'Connect - messenger'
};

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const authCookieData: string | undefined = cookieStore.get('authData')?.value;
	let data: AuthResponse | null;

	if (authCookieData) {
		data = JSON.parse(authCookieData);
	} else {
		data = null;
	}

	return (
		<html lang='ru'>
			<body className={inter.variable}>
				<AuthProvider authData={data}>
					<QueryProvider>{children}</QueryProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
