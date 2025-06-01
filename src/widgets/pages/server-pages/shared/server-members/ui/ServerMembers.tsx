'use client';

import { FC, useEffect, useState } from 'react';
import { ServerMember } from '@features/server/server-member';
import { useServerStore } from '@shared/store/serverStore.ts';
import { Scroll } from '@shared/ui/scroll';
import { ServerMembersGroup } from '@shared/ui/server';
import { IGroupedMembers, getGroupedServerMembers } from '../lib/get-grouped-server-members.ts';

const ServerMembers: FC = () => {
	const serverMembers = useServerStore(state => state.serverMembers);
	const roles = useServerStore(state => state.roles);
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
