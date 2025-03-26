import { IUserFriendRequest, IUserWithProfile, TFriendsFilter } from '@shared/libs/interfaces';
import { create } from 'zustand/react';

interface FriendsStore {
	filter: TFriendsFilter;
	friends: IUserWithProfile[];
	requests: IUserFriendRequest[];
	setFilter: (filter: TFriendsFilter) => void;
	setFriends: (friends: IUserWithProfile[]) => void;
	setRequests: (requests: IUserFriendRequest[]) => void;
}

export const useFriendsStore = create<FriendsStore>(set => ({
	filter: 'ADD',
	friends: [],
	requests: [],
	setFilter: filter => set({ filter }),
	setFriends: friends => set({ friends }),
	setRequests: requests => set({ requests })
}));
