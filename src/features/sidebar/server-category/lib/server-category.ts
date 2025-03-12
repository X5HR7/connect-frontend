import { IServerCategory } from '@shared/libs/interfaces';
import { ReactNode } from 'react';

export interface IServerCategoryProps {
	category: IServerCategory;
	children?: ReactNode;
}
