'use client';

import { ServerMember } from '@features/server/server-member';
import { IGroupedMembers, getGroupedServerMembers } from '@shared/libs/utils/getGroupedServerMembers.ts';
import { useServerStore } from '@shared/store/serverStore.ts';
import { Scroll } from '@shared/ui/scroll/Scroll.tsx';
import { ServerMembersGroup } from '@shared/ui/server/server-members-group/ServerMembersGroup.tsx';
import { FC, useEffect, useState } from 'react';

const ServerMembers: FC = () => {
	const { serverMembers, roles } = useServerStore();
	const [membersGroups, setMembersGroups] = useState<IGroupedMembers | null>(null);

	useEffect(() => {
		if (serverMembers && roles) {
			const data = getGroupedServerMembers(serverMembers, roles);
			setMembersGroups(data);
		}
	}, [serverMembers, roles]);

	return (
		<Scroll width={4} hasMore={false} loading={false}>
			{membersGroups &&
				Object.keys(membersGroups).map(roleName => (
					<ServerMembersGroup title={`${roleName} - ${membersGroups[roleName].length}`} key={roleName}>
						{membersGroups[roleName].map(member => (
							<ServerMember serverMember={member} key={member.id} />
						))}
					</ServerMembersGroup>
				))}
		</Scroll>
	);
};

export { ServerMembers };
