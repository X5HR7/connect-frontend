import { IUserFriendRequest, IUserWithProfile, TFriendsFilter } from '@shared/libs/interfaces';
import { create } from 'zustand/react';

interface FriendsStore {
	filter: TFriendsFilter;
	friends: IUserWithProfile[];
	requests: IUserFriendRequest[];
	setFilter: (filter: TFriendsFilter) => void;
	setFriends: (friends: IUserWithProfile[]) => void;
	setRequests: (requests: IUserFriendRequest[]) => void;
	removeRequest: (requestId: string) => void;
	addFriend: (friend: IUserWithProfile) => void;
}

export const useFriendsStore = create<FriendsStore>(set => ({
	filter: 'ONLINE',
	friends: [],
	requests: [],
	setFilter: filter => set({ filter }),
	setFriends: friends => set({ friends }),
	setRequests: requests => set({ requests }),
	removeRequest: requestId =>
		set(state => ({
			requests: state.requests.filter(request => request.id !== requestId)
		})),
	addFriend: friend =>
		set(state => ({
			friends: [...state.friends, friend]
		}))
}));
