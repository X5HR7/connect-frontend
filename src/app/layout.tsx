import { QueryProvider } from '@shared/libs/providers/QueryProvider.tsx';
import { SocketProvider } from '@shared/libs/providers/SocketProvider.tsx';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import type { Metadata } from 'next';
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
		<html lang='ru'>
			<body className={inter.variable}>
				<QueryProvider>
					<SocketProvider>
						{children}
						<GlobalModal />
					</SocketProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
