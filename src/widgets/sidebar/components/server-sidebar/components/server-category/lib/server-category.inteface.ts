import { ReactNode } from 'react';
import { IServerCategory } from '@shared/libs/interfaces';

export interface ServerCategoryProps {
	category: IServerCategory;
	children?: ReactNode;
}
