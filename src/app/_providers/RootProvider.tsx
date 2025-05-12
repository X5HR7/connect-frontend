import { ReactNode } from 'react';
import { QueryProvider } from './QueryProvider.tsx';
import ThemeProvider from './ThemeProvider.tsx';

const RootProvider = ({ children }: { children: ReactNode }) => {
	return (
		<QueryProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</QueryProvider>
	);
};

export { RootProvider };
