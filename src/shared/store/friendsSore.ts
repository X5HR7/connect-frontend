import { TUserRequests } from '@shared/libs/api/friends/friends.ts';
import { IUserFriendRequest, IUserWithProfile, TFriendsFilter } from '@shared/libs/interfaces';
import { create } from 'zustand/react';

interface FriendsStore {
	filter: TFriendsFilter;
	friends: IUserWithProfile[];
	requestsReceived: IUserFriendRequest[];
	requestsSent: IUserFriendRequest[];
	setFilter: (filter: TFriendsFilter) => void;
	setFriends: (friends: IUserWithProfile[]) => void;
	setRequests: (requests: TUserRequests) => void;
	addSentRequest: (request: IUserFriendRequest) => void;
	removeRequest: (requestId: string) => void;
	addFriend: (friend: IUserWithProfile) => void;
	removeFriend: (friendId: string) => void;
}

export const useFriendsStore = create<FriendsStore>(set => ({
	filter: 'ONLINE',
	friends: [],
	requestsReceived: [],
	requestsSent: [],
	setFilter: filter => set({ filter }),
	setFriends: friends => set({ friends }),
	setRequests: requests => set({ requestsReceived: requests.requestsReceived, requestsSent: requests.requestsSent }),
	addSentRequest: request => set(state => ({ requestsSent: [...state.requestsSent, request] })),
	removeRequest: requestId =>
		set(state => ({
			requestsReceived: state.requestsReceived.filter(request => request.id !== requestId)
		})),
	addFriend: friend =>
		set(state => ({
			friends: [...state.friends, friend]
		})),
	removeFriend: friendId =>
		set(state => ({
			friends: state.friends.filter(friend => friend.id !== friendId)
		}))
}));
