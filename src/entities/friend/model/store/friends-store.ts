import { create } from 'zustand';
import { IUserFriendRequest, IUserWithProfile, TFriendsFilter } from '@shared/libs/interfaces';
import { TUserRequests } from '../api/friends.ts';

interface FriendsStore {
	filter: TFriendsFilter;
	setFilter: (filter: TFriendsFilter) => void;

	friends: IUserWithProfile[];
	setFriends: (friends: IUserWithProfile[]) => void;
	addFriend: (friend: IUserWithProfile) => void;
	removeFriend: (friendId: string) => void;

	setRequests: (requests: TUserRequests) => void;

	requestsReceived: IUserFriendRequest[];
	addReceivedRequest: (request: IUserFriendRequest) => void;
	removeReceivedRequest: (requestId: string) => void;

	requestsSent: IUserFriendRequest[];
	addSentRequest: (request: IUserFriendRequest) => void;
	removeSentRequest: (requestId: string) => void;
}

export const useFriendsStore = create<FriendsStore>(set => ({
	filter: 'ONLINE',
	setFilter: filter => set({ filter }),

	friends: [],
	setFriends: friends => set({ friends }),
	addFriend: friend =>
		set(state => ({
			friends: [...state.friends, friend]
		})),
	removeFriend: friendId =>
		set(state => ({
			friends: state.friends.filter(friend => friend.id !== friendId)
		})),

	setRequests: requests => set({ requestsReceived: requests.requestsReceived, requestsSent: requests.requestsSent }),

	requestsReceived: [],
	addReceivedRequest: request => set(state => ({ requestsReceived: [...state.requestsReceived, request] })),
	removeReceivedRequest: requestId =>
		set(state => ({
			requestsReceived: state.requestsReceived.filter(request => request.id !== requestId)
		})),

	requestsSent: [],
	addSentRequest: request => set(state => ({ requestsSent: [...state.requestsSent, request] })),
	removeSentRequest: requestId =>
		set(state => ({
			requestsSent: state.requestsSent.filter(request => request.id !== requestId)
		}))
}));
