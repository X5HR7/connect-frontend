import { QueryProvider } from '@shared/libs/providers/QueryProvider.tsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
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

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={inter.variable}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
