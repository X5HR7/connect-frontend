'use client';

import { useFetchFriendsRequests } from '@shared/libs/hooks/use-fetch-friends-requests.ts';
import { useFetchFriends } from '@shared/libs/hooks/use-fetch-friends.ts';
import { EVENTS, IUserFriendRequest } from '@shared/libs/interfaces';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { useSocketStore } from '@shared/store/socketStore.ts';
import { FC, ReactNode, useEffect } from 'react';

interface IFriendsProviderProps {
	children: ReactNode;
}

export const FriendsProvider: FC<IFriendsProviderProps> = ({ children }) => {
	const { data: friends, isPending: isFriendsPending } = useFetchFriends();
	const { data: requests, isPending: isRequestsPending } = useFetchFriendsRequests();
	const { setFriends, setRequests, addRequestReceived } = useFriendsStore();
	const { socket } = useSocketStore();

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

	const handleFriendRequestReceive = (req: IUserFriendRequest) => {
		if (req?.id) {
			addRequestReceived(req);
		}
	};

	useEffect(() => {
		if (socket) {
			socket.on(EVENTS.FRIEND_REQUEST_RECEIVED, handleFriendRequestReceive);

			return () => {
				socket?.off(EVENTS.FRIEND_REQUEST_RECEIVED, handleFriendRequestReceive);
			};
		}
	}, [socket]);

	return <>{children}</>;
};
