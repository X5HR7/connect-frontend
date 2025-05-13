import { FC } from 'react';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { Avatar } from '@shared/ui/user/avatar/Avatar.tsx';
import styles from './CallMember.module.scss';

interface CallMemberProps {
	user: IUserWithProfile;
}

const CallMember: FC<CallMemberProps> = ({ user }) => {
	return (
		<li className={styles.member}>
			<Avatar profile={user.profile} size={90} statusStyles={styles.member__status} />
		</li>
	);
};

export { CallMember };
