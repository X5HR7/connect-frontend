import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { RootProvider } from './_providers/RootProvider.tsx';
import './globals.scss';

const GlobalModal = dynamic(() => import('@shared/ui/global-modal').then(mod => mod.GlobalModal));

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
				<RootProvider>
					{children}
					<GlobalModal />
				</RootProvider>
			</body>
		</html>
	);
}
