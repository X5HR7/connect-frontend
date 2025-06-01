import { FC } from 'react';
import { Avatar } from '@shared/ui/user';
import { ServerMemberProps } from '../lib/server-member.interface.ts';
import styles from './ServerMember.module.scss';

const ServerMember: FC<ServerMemberProps> = ({ serverMember }) => {
	return (
		<li className={styles.member}>
			<Avatar profile={serverMember.user.profile} statusStyles={styles.member__status} size={30} />
			<p className={styles.member__username}>
				{serverMember.displayName || serverMember.user.profile.displayName || serverMember.user.username}
			</p>
		</li>
	);
};

export { ServerMember };
