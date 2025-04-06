import { IServer, IServerMember } from '@shared/libs/interfaces/server.interface.ts';

type TUser = 'USER' | 'DEVELOPER' | 'ADMIN';

export interface IUserWithProfile extends IUser {
	profile: IUserProfile;
}

export interface IUser {
	id: string;
	email?: string;
	phone?: string;
	username: string;
	password?: string;
	type?: TUser;
	_count?: {
		friends?: number;
		serverMember?: number;
	};

	profile?: IUserProfile;
	friends?: IUserFriend[];
	friendOf?: IUserFriend[];
	friendRequestsSent?: IUserFriendRequest[];
	friendRequestsReceived?: IUserFriendRequest[];
	serverMember?: IServerMember[];
	serversCreated?: IServer[];
}

export type TProfileStatus = 'ONLINE' | 'INACTIVE' | 'DO_NOT_DISTURB' | 'OFFLINE';

export interface IUserProfile {
	id: string;
	displayName?: string;
	description?: string;
	background?: string;
	avatar?: string;
	status: TProfileStatus;

	createdAt: Date;
}

export interface IUserFriend {
	id: string;
	userId: string;
	friendId: string;
}

export interface IUserFriendRequest {
	id: string;
	senderId: string;
	receiverId: string;
	sender: IUserWithProfile;
}

export type TFriendsFilter = 'ALL' | 'ONLINE' | 'ADD';
