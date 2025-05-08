'use client';

import { useFetchFriendsRequests } from '@shared/libs/hooks/use-fetch-friends-requests.ts';
import { useFetchFriends } from '@shared/libs/hooks/use-fetch-friends.ts';
import { EVENTS, IUserFriendRequest, IUserWithProfile } from '@shared/libs/interfaces';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { useSocketStore } from '@shared/store/socketStore.ts';
import { FC, ReactNode, useEffect } from 'react';

interface IFriendsProviderProps {
	children: ReactNode;
}

export const FriendsProvider: FC<IFriendsProviderProps> = ({ children }) => {
	const { data: friends, isPending: isFriendsPending } = useFetchFriends();
	const { data: requests, isPending: isRequestsPending } = useFetchFriendsRequests();
	const { setFriends, setRequests, addReceivedRequest, removeSentRequest, removeFriend, addFriend } = useFriendsStore();
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
			addReceivedRequest(req);
		}
	};

	const handleFriendRequestAccept = ({ request, user }: { request: IUserFriendRequest; user: IUserWithProfile }) => {
		if (request?.id && user?.id) {
			addFriend(user);
			removeSentRequest(request.id);
		}
	};

	const handleFriendRequestReject = (req: IUserFriendRequest) => {
		if (req?.id) {
			removeSentRequest(req.id);
		}
	};

	const handleFriendDelete = (friendId: string) => {
		if (friendId) {
			removeFriend(friendId);
		}
	};

	useEffect(() => {
		if (socket) {
			socket.on(EVENTS.FRIEND_REQUEST_RECEIVED, handleFriendRequestReceive);
			socket.on(EVENTS.FRIEND_REQUEST_ACCEPTED, handleFriendRequestAccept);
			socket.on(EVENTS.FRIEND_REQUEST_REJECTED, handleFriendRequestReject);
			socket.on(EVENTS.FRIEND_DELETE, handleFriendDelete);

			return () => {
				socket.off(EVENTS.FRIEND_REQUEST_RECEIVED, handleFriendRequestReceive);
				socket.off(EVENTS.FRIEND_REQUEST_ACCEPTED, handleFriendRequestAccept);
				socket.off(EVENTS.FRIEND_REQUEST_REJECTED, handleFriendRequestReject);
				socket.off(EVENTS.FRIEND_DELETE, handleFriendDelete);
			};
		}
	}, [socket]);

	return <>{children}</>;
};
