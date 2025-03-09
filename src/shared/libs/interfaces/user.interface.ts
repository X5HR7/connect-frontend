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

	profile?: IUserProfile;
	friends?: IUserFriend[];
	friendOf?: IUserFriend[];
	friendRequestsSent?: IUserFriendRequests[];
	friendRequestsReceived?: IUserFriendRequests[];
	serverMember?: IServerMember[];
	serversCreated?: IServer[];
}

type TProfileStatus = 'ONLINE' | 'INACTIVE' | 'DO_NOT_DISTURB' | 'OFFLINE';

export interface IUserProfile {
	id: string;
	displayName?: string;
	background?: string;
	avatar?: string;
	status: TProfileStatus;
}

export interface IUserFriend {
	id: string;
	userId: string;
	friendId: string;
}

export interface IUserFriendRequests {
	id: string;
	senderId: string;
	receiverId: string;
}
