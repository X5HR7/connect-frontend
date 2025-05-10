import { useEffect, useState } from 'react';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { useFriendsStore } from '@shared/store/friendsSore.ts';

export const useFriendUserStatus = (user?: IUserWithProfile | null) => {
	const friends = useFriendsStore(state => state.friends);
	const requestsReceived = useFriendsStore(state => state.requestsReceived);
	const requestsSent = useFriendsStore(state => state.requestsSent);

	const [friendStatus, setFriendStatus] = useState<'friend' | 'requestSent' | 'requestReceived' | 'none'>('none');

	useEffect(() => {
		if (user) {
			if (friends.find(friend => friend.id === user.id)) {
				setFriendStatus('friend');
			} else if (requestsReceived.find(req => req.senderId === user.id)) {
				setFriendStatus('requestReceived');
			} else if (requestsSent.find(req => req.receiverId === user.id)) {
				setFriendStatus('requestSent');
			} else {
				setFriendStatus('none');
			}
		} else {
			setFriendStatus('none');
		}
	}, [user, friends, requestsReceived, requestsSent]);

	return { status: friendStatus };
};
