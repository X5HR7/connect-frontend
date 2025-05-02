import { QueryProvider } from '@shared/libs/providers/QueryProvider.tsx';
import { SocketProvider } from '@shared/libs/providers/SocketProvider.tsx';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.scss';

const GlobalModal = dynamic(() => import('@shared/ui/global-modal'));

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'cyrillic'],
	weight: ['200', '400', '500', '600', '700'],
	style: ['normal', 'italic']
});

export const metadata: Metadata = {
	title: APP_NAME,
	description: 'Connect - messenger'
};

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='ru' className='dark' style={{ colorScheme: 'dark' }} suppressHydrationWarning>
			<body className={inter.variable}>
				<QueryProvider>
					<SocketProvider>
						<ThemeProvider
							attribute={'class'}
							defaultTheme={'dark'}
							enableSystem={true}
							disableTransitionOnChange={true}
							storageKey={'theme'}
							enableColorScheme={false}
						>
							{children}
							<GlobalModal />
						</ThemeProvider>
					</SocketProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
