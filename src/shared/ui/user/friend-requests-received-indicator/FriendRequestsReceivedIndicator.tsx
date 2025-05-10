'use client';

import { FC } from 'react';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import styles from './FriendRequestsReceivedIndicator.module.scss';

interface Props {
	size?: number;
	fontSize?: number;
}

const FriendRequestsReceivedIndicator: FC<Props> = ({ size = 20, fontSize = 13 }) => {
	const requestsReceived = useFriendsStore(state => state.requestsReceived);

	return requestsReceived.length === 0 ? null : (
		<span
			style={{
				width: size,
				height: size,
				fontSize
			}}
			className={styles.indicator}
		>
			{requestsReceived.length < 10 ? requestsReceived.length : '9+'}
		</span>
	);
};

export { FriendRequestsReceivedIndicator };
