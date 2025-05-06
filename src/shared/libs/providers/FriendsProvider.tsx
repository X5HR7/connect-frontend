'use client';

import { useFetchFriendsRequests } from '@shared/libs/hooks/use-fetch-friends-requests.ts';
import { useFetchFriends } from '@shared/libs/hooks/use-fetch-friends.ts';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { FC, ReactNode, useEffect } from 'react';

interface IFriendsProviderProps {
	children: ReactNode;
}

export const FriendsProvider: FC<IFriendsProviderProps> = ({ children }) => {
	const { data: friends, isPending: isFriendsPending } = useFetchFriends();
	const { data: requests, isPending: isRequestsPending } = useFetchFriendsRequests();
	const { setFriends, setRequests } = useFriendsStore();

	useEffect(() => {
		if (!isFriendsPending && friends) {
			setFriends(friends);
		}

		return () => {
			setFriends([]);
		};
	}, [friends, isFriendsPending, setFriends]);

	useEffect(() => {
		if (!isRequestsPending && requests) {
			setRequests(requests);
		}

		return () => {
			setRequests({ requestsSent: [], requestsReceived: [] });
		};
	}, [requests, isRequestsPending, setRequests]);

	return <>{children}</>;
};
