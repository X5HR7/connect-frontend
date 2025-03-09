'use client';

import { queryClient } from '@shared/libs/api/queryClient.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

export const QueryProvider = ({ children }: { children: ReactNode }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
