'use client';

import { FC, ReactNode, useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { useFetchFriends, useFriendsStore } from '@entities/friend';
import { useFetchFriendsRequests } from '@entities/friend/model/hooks/use-fetch-friends-requests.ts';
import { EVENTS, IUserFriendRequest, IUserWithProfile } from '@shared/libs/interfaces';
import { useSocketStore } from '@shared/store/socketStore.ts';

interface IFriendsProviderProps {
	children: ReactNode;
}

export const FriendsProvider: FC<IFriendsProviderProps> = ({ children }) => {
	const { data: friends, isPending: isFriendsPending } = useFetchFriends();
	const { data: requests, isPending: isRequestsPending } = useFetchFriendsRequests();
	const { setFriends, setRequests, addReceivedRequest, removeSentRequest, removeFriend, addFriend } = useFriendsStore(
		useShallow(state => ({
			setFriends: state.setFriends,
			setRequests: state.setRequests,
			addReceivedRequest: state.addReceivedRequest,
			removeSentRequest: state.removeSentRequest,
			removeFriend: state.removeFriend,
			addFriend: state.addFriend
		}))
	);
	const socket = useSocketStore(state => state.socket);

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
