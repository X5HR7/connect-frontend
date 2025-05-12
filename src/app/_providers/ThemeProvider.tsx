import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider
			attribute={'class'}
			defaultTheme={'dark'}
			enableSystem={true}
			disableTransitionOnChange={true}
			storageKey={'theme'}
			enableColorScheme={false}
		>
			{children}
		</ThemeProvider>
	);
};

export default Layout;
