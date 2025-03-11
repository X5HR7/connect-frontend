import { IUserWithProfile } from '@shared/libs/interfaces';

export interface IProfileProps {
	user: IUserWithProfile;
	onClick?: () => void;
}
