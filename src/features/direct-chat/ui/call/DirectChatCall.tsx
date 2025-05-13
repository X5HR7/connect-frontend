'use client';

import { FC } from 'react';
import { useCallStore } from '@entities/direct-chat';
import { useAuthStore } from '@entities/user';
import { CallControls } from '../../components/call-controls/CallControls.tsx';
import { CallMember } from '../../components/call-member/CallMember.tsx';
import styles from './DirectChatCall.module.scss';

const DirectChatCall: FC = () => {
	const currentUser = useAuthStore(state => state.user);
	const caller = useCallStore(state => state.caller);
	const callee = useCallStore(state => state.callee);
	const callStatus = useCallStore(state => state.callStatus);

	return (
		<section className={styles.call}>
			<ul className={styles.call__members}>
				{[caller, callee].map(member => {
					if (member && !(callStatus === 'RECEIVED' && member.id === currentUser?.id)) {
						return <CallMember user={member} key={member.id} />;
					}
				})}
			</ul>
			<div className={styles.call__controls}>
				<CallControls status={callStatus} />
			</div>
		</section>
	);
};

export { DirectChatCall };
